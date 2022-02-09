import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db", "1.0.0", "SQLite Test");

export function database() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS form (id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT NOT NULL, LastName TEXT NOT NULL)",
        [],
        () => resolve(),
        (err) => reject(err)
      );
    });
  });
}

export const insertion = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO form ( FirstName, LastName) VALUES (?,?)",
        [firstName, lastName],
        () => {
          console.log(`${firstName} and ${lastName} added.`);
          resolve();
        },
        (err) => {
          console.log("Row initialization failed!" + err);
          reject();
        }
      );
    });
  });
};

export const retrieve = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM form ORDER BY id DESC",
        [],
        (_, result) => {
          console.log("Database retrieved.");
          let table = result.rows._array;
          console.log(table);
          resolve();
        },
        (err) => {
          console.log("Retrieve failed!" + err);
          reject(err);
        }
      );
    });
  });
};

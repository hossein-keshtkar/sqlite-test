import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db", "1.0.0", "SQLite Test");

export function database() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS form (id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT NOT NULL, LastName TEXT NOT NULL)",
        [],
        () => {
          console.log("Table Created.");
          resolve();
        },
        (err) => reject(new Error("Couldn't Create the Table!" + err))
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
          console.log(`${firstName} ${lastName} Added to the Table.`);
          resolve();
        },
        (err) => {
          reject(new Error("Row initialization failed!" + err));
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
          reject(new Error("Retrieve failed!" + err));
        }
      );
    });
  });
};

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("table.db", "1.0.0", "SQLite Test");

export function tableCreation(tableName) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableName} ( FirstName TEXT NOT NULL, LastName TEXT NOT NULL)`,
        [],
        () => {
          console.log(`Table ${tableName} Created or Already Existed.`);
          resolve();
        },
        (err) => {
          reject(new Error("Couldn't Create the Table!" + err));
        }
      );
    });
  });
}

export const insertTable = (tableName, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${tableName} ( FirstName, LastName) VALUES (?,?)`,
        [firstName, lastName],
        () => {
          console.log(`${firstName} ${lastName} Added.`);
          resolve();
        },
        (err) => {
          reject(new Error("Initialization failed!" + err));
        }
      );
    });
  });
};

export const retrieveTable = (tableName) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName}`,
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

export const drop = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DROP TABLE ${name}`,
        [],
        () => {
          console.log(`Table ${name} dropped successfully.`);
          resolve();
        },
        (err) => {
          console.log("Drop Failed!" + err);
          reject();
        }
      );
    });
  });
};

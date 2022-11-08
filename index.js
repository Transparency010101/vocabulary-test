import sql from "./node_modules/sqlite3/lib/sqlite3.js";
import { sqlCommands, checkError } from "./API_db.js";

export const db = new sql.Database("./vocabularyDB.db", sql.OPEN_READWRITE, (err) => {
   checkError(err);

   console.log("connection successful");
});

// sqlCommands.insertData(["in", "в"]);
// sqlCommands.showRandomRow();
// sqlCommands.showAllRows();

// let answer = prompt("Write..: ", null);
// console.log("Вибери команду:");
// console.log("insertData - записать слово");
// console.log("showRandomRow - Начать тест");

// setInterval(() => {
   // console.log(sqlCommands.showRandomRow());
// }, 6000);

db.close((err) => {
   checkError(err);
});

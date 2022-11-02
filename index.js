import sql from "./node_modules/sqlite3/lib/sqlite3.js";
import { sqlCommands, checkError } from "./API_db.js";

export const db = new sql.Database("./vocabularyDB.db", sql.OPEN_READWRITE, (err) => {
   checkError(err);

   console.log("connection successful");
});

// sqlCommands.insertData(["in", "в"]);
// sqlCommands.showRandomRow();
// sqlCommands.showAllRows();

db.close((err) => {
   checkError(err);
});

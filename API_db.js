import {db} from "./index.js";

export function checkError(err) {
   if (err) return console.log(err.message);
}

export const sqlCommands = {
   /* 
      * createTable
      * insertData
      * showAllRows
      * deleteTable
      * showRandomRow
   */
   createTable: () => {
      db.run(`CREATE TABLE test(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         word TEXT,
         translate TEXT
      )`);
   },

   /*
      @param {data[]} - ["en word", "translate"]
   */
   insertData: (data) => {
      const insertData = `INSERT INTO test(word, translate) VALUES(?, ?)`;

      db.run(insertData, data, (err) => {
         checkError(err);

         console.log("insert data has been successful");
      });
   },

   showAllRows: () => {
      const selectAll = "SELECT * FROM test";

      db.all(selectAll, [], (err, rows) => {
         checkError(err);

         rows.forEach(row => {
            console.log(row);
         });
      });
   },

   deleteTable: () => {
      const deleteTable = "DROP TABLE test";

      db.run(deleteTable, (err) => {
         checkError(err);
      });
   },

   showRandomRow: () => {
      const a = "SELECT * FROM test ORDER BY RANDOM() LIMIT 1";

      db.get(a, (err, id) => {
         checkError(err);

         console.log(id);
      });
   }
};
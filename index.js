const sql = require("sqlite3").verbose();

function callError(err) {
   if (err) return console.log(err.message);
}

const sqlCommands = {
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

   insertData: (data) => {
      const insertData = `INSERT INTO test(word, translate) VALUES(?, ?)`;

      db.run(insertData, data, (err) => {
         callError(err);

         console.log("insert data has been successful");
      });
   },

   showAllRows: () => {
      const selectAll = "SELECT * FROM test";

      db.all(selectAll, [], (err, rows) => {
         callError(err);

         rows.forEach(row => {
            console.log(row);
         });
      });
   },

   deleteTable: () => {
      const deleteTable = "DROP TABLE test";

      db.run(deleteTable, (err) => {
         callError(err);
      });
   },

   showRandomRow: () => {
      const a = "SELECT * FROM test ORDER BY RANDOM() LIMIT 1";

      db.get(a, (err, id) => {
         callError(err);

         console.log(id);
      });
   }
};

const db = new sql.Database("./vocabularyDB.db", sql.OPEN_READWRITE, (err) => {
   callError(err);

   console.log("connection successful");
});

sqlCommands.showRandomRow();

db.close((err) => {
   callError(err);
});


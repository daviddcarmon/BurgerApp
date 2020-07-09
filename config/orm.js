const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    connection.query(`select * from ??;`, table, function (err, data) {
      if (err) {
        console.log(`Select all function not working. Contact programmer.`);
        // res.status(500).end();

        console.log(table);
      }
      cb(data);
    });
  },

  insertOne: (table, val, cb) => {
    // console.log(`${table},${col},${val}`);
    connection.query(
      //update col.toString() SET to a {burger: colVal}
      `insert into ?? set ?`,
      [table, val],
      function (err, data) {
        if (err) {
          console.log(err);
          console.log(`Update function not working. Contact programmer.`);
          // res.status(500).end();
        }
        console.log(data);
        cb(data);
      }
    );
  },

  updateOne: (table, val, condition, cb) => {
    connection.query(
      `update ?? set ? where ?`,
      [table, val, condition],
      function (err, data) {
        if (err) {
          console.log(`Update function not working. Contact programmer.`);
          // res.status(500).end();
        }
        cb(data);
      }
    );
  },

  deleteOne: (table, condition, cb) => {
    connection.query(`delete from ?? where ?`, [table, condition], function (
      err,
      data
    ) {
      if (err) {
        console.log(`Delete function not working. Contact programmer.`);
        console.log(err);
        // res.status(500).end();
      }
      cb(data);
    });
  },
};

// export orm to use in model
module.exports = orm;

const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    connection.query(`select * from ?;`,table, function (err, data) {
      if (err) {
        console.log(`Select all function not working. Contact programmer.`);
        // res.status(500).end();
      }
      cb(data);
    });
  },

  insertOne: (table, col, val, cb) => {
    connection.query(
      `insert into ${table}(${col.toSting()}) values(${val})`,
      function (err, data) {
        if (err) {
          console.log(`Update function not working. Contact programmer.`);
          // res.status(500).end();
        }
        cb(data);
      }
    );
  },

  updateOne: (table, val, condition, cb) => {
    connection.query(`update ${table} set ${val} where ${condition}`, function (
      err,
      data
    ) {
      if (err) {
        console.log(`Update function not working. Contact programmer.`);
        // res.status(500).end();
      }
      cb(data);
    });
  },
};

// export orm to use in model
module.exports = orm;

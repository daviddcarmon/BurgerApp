// require in mysql
const mysql = require("mysql");

let connection;
// create connection to database using mysql

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PassWord",
    database: "burger_db",
  });
}

// making the connection to database
connection.connect((err) => {
  if (err) {
    console.log(`Not Connected, check code! ${err.stack}`);
  }
  console.log(
    `Listening on http://localhost:${connection.port} connectionId ${connection.threadId}`
  );
});

// export connection to use in ORM
module.exports = connection;

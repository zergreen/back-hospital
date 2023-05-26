const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "127.0.0.1",
  database: "test_db",
  port: 3306,
  user: "root",
  password: "root",
});

// console.log(connect)

connect.connect((err) => {
  if (err) {
    console.log("Error connect to database!! \n AT : " + err);
  } else {
    console.log("Connect to Database Success!");
  }
});

// connect.connect;

module.exports = connect;

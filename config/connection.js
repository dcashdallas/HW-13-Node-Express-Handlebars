// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "us-cdbr-east-02.cleardb.com",
//     port: 3306,
//     user: "b5b7a8c63bf4fd",
//     password: "1dad4cbf",
//     database: "heroku_e1c831cb0fcd958"
// });

// Make connection.
// connection.connect()

// Export connection for our ORM to use.
// module.exports = connection;

// function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// --user=b5b7a8c63bf4fd --password heroku_e1c831cb0fcd958 --reconnect=true

var mysql = require('mysql');



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sublime#96',
        database: 'burgers_db'
    });
}



connection.connect();

module.exports = connection;
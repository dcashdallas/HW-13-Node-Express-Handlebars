var connection = require("../config/connection.js");

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

var orm = {

    // selectAll()
    selectAll: function (callback) {

        // Run MySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

};

module.exports = orm;

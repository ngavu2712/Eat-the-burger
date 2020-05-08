var connection = require('./connection');

var orm = {

    selectAll : function(tableName, dbModelCallback) {
        connection.query("SELECT * FROM ??", tableName,function(err,burgerdb){
            dbModelCallback(burgerdb)
        })
    },
    insertOne : function(tableName, colName, colValue, dbModelCallback) {
        connection.query("INSERT INTO ?? (??) VALUES (?)",[tableName, colName,colValue], function(err, burderdb){
            dbModelCallback(burgerdb);
        })
    },
    updateOne : function(tableName, colName, colValue, dbModelCallback) {
        connection.query("UPDATE ?? SET ?? = ?", [tableName, colName, colValue], function(err, burgerdb){
            dbModelCallback(burgerdb);
        })
    }
} 

module.exports = orm;
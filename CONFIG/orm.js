var connection = require('./connection');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function printQuestionMarks (num) {
    var arr = [];

    for (var i= 0; i < num ; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for(var key in ob) {
        var value = ob[Key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob,key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    //translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {

    selectAll : function(tableName, dbModelCallback) {

        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err,burgerdb){
            if(err) {throw err;}
            dbModelCallback(burgerdb)
        })
    },

    insertOne : function(tableName, colName, values, dbModelCallback) {
        
        var queryString = "INSERT INTO" + tableName;

        queryString += " ( ";
        queryString += colName.toString();
        queryString += " ) ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += " ) ";

        console.log(queryString);

        //Connect to SQLWorkbench
        connection.query(queryString, values, function(err, dbModelCallback){
            if (err) {throw err;}
            dbModelCallback(burgerdb)
        })

        
    },
    updateOne : function(tableName, objColVals, condition, dbModelCallback) {
        var queryString = "UPDATE " + tableName;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, dbModelCallback) {
            if(err) {throw err;}
        })
        dbModelCallback(burgerdb);
    }
    
}; 

module.exports = orm;
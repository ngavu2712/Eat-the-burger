// Import ORM
var orm = require('../config/orm.js');

var burgers = 
{
    selectAll : function(dbControllerCallback){
      orm.selectAll("burgers", function(burgerdb){
          dbControllerCallback(burgerdb)
      })
    },

    insertOne : function(colName, values, dbControllerCallback) {
      orm.insertOne("burgers", colName, values, function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    },

    updateOne : function(objColVals, condition, dbControllerCallback){
      orm.updateOne("burgers", objColVals, condition, function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    }

}

module.exports = burgers;
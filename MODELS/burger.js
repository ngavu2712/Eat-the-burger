// Import ORM
var orm = require('../config/orm.js');

var burgers = 
{
    selectAll : function(dbControllerCallback){
      orm.selectAll("burgers", function(burgerdb){
          dbControllerCallback(burgerdb)
      })
    },

    insertOne : function(dbControllerCallback) {
      orm.insertOne("burgers", "Burger_name", function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    },

    updateOne : function(dbControllerCallback){
      orm.updateOne("burgers", "Devoured", function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    }

}

module.exports = burgers;
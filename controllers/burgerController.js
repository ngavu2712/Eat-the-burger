var burgers = require('../models/burger')

function burgerController (app){

app.get("/", function(req,res){
    burgers.selectAll(function(burgerdb){
        res.render("index", {burgers : burgerdb})
    })
})

}

module.exports = burgerController;
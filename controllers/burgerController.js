var burgers = require('../models/burger');

var express = require('express');


function burgerController (app){

app.get("/", function(req,res){
    burgers.selectAll(function(burgerdb){
        res.render("index", {burgers : burgerdb})
    })
});

app.post("/api/burgers", function (req,res) {
    burgers.insertOne(['Burger_name'], [req.body.Burger_name], function(burgerdb){
        res.redirect('/');
    })
});

app.put('/burgers/:id', function (req,res){
    var condition = 'id = ' + req.params.id;

    burgers.updateOne({Devoured : true}, condition, function(burgerdb){
        res.redirect('/');
    });
});


}



module.exports = burgerController;
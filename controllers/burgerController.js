var burgers = require('../models/burger');

var express = require('express');


function burgerController (app){

app.get("/", function(req,res){
    burgers.selectAll(function(burgerdb){
        res.render("index", {burgers : burgerdb})
    })
})

app.post("/api", function (req,res) {
    burgers.insertOne([])
})
}

module.exports = burgerController;
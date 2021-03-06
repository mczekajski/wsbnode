const express = require("express");
const path = require("path");
const functions = require("./functions");
const text = functions.text;
const server = express();
const port = process.env.PORT || 3000;

server.set("view engine", "hbs")
server.use("/assets", express.static(path.join(__dirname,"./assets")))
server.use("/js", express.static(path.join(__dirname,"./js")))

server.get("/", function(req,res) {
    res.render("index", {
        pageTitle: "Lekcja Node",
        title: text
    });
})

server.get("/about", function(req,res) {
    res.send("o stronie")
})

server.get("/story", function(req,res) {
    res.send("historia")
})

server.get('*', function(req, res){
    console.log('404ing');
    res.send('404');
  });

server.listen(port, (err) => {
    if (err) return;
    console.log(`Aplikacja działa na porcie ${port}`)
});
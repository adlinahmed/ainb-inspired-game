const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 2900;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (request,response) => {
    response.render("welcome");
}) 

app.get("/welcome/", (request,response) => {
    response.render("welcome");
})

app.get("/room1/", (request,response) => {
    response.render("room1");
})

app.get("/room2/", (request,response) => {
    response.render("room2");
})

app.get("/room3/", (request,response) => {
    response.render("room3");
})

app.get("/room4/", (request,response) => {
    response.render("room4");
})

app.get("/room5/", (request,response) => {
    response.render("room5");
})

app.get("/room6/", (request,response) => {
    response.render("room6");
})

app.get("/room7/", (request,response) => {
    response.render("room7");
})

app.get("/room8/", (request,response) => {
    response.render("room8");
})

app.get("/lose/", (request,response) => {
    response.render("lose");
})

app.get("/win/", (request,response) => {
    response.render("win");
})

app.listen(port, ()=> {
    console.log('listening on ${port}');
})
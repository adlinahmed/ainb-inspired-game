const { request } = require("express");
const express = require("express");
const session = require("express-session");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 2900;

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use(session({
    secret: 'random string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    let user = "";
    if (req.session && req.session.username) {
        user = req.session.username;
    } 
    res.render("index", {my_user : user});
}) 
app.post("/signup", (req,res) => {
    const valid_users = [
        {"name": "adlin", "password": "ahmed"},
        {"name": "miso", "password": "piso"}
    ];
    const user = req.body.username;
    const pass = req.body.password;
    const found_user = valid_users.find(use => use.name == user && use.password == pass);
    ;
    if (found_user) {
        req.session.username = user;
        res.redirect("/welcome");
    } else {
        req.session.destroy(()=>{
            console.log("user reset");
        })
        res.redirect("/");
    }
    // req.session.username = user;
    // res.redirect("/welcome/"); 

}) 
app.get("/welcome/", (req,res) => {

    if (req.session && req.session.username) {
        res.render("welcome", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }
})

app.get("/room1/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room1", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room2/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room2", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room3/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room3", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room4/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room4", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room5/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room5", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room6/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room6", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room7/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room7", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/room8/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("room8", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/lose/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("lose", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.get("/win/", (req,res) => {
    if (req.session && req.session.username) {
        res.render("win", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }})

app.listen(port, ()=> {
    console.log('listening on ${port}');
})
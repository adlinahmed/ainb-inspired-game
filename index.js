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
    const validUsers = ["adlin", "miso"];
    const user = req.body.username;
    if (validUsers.includes(user)) {
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
    // const user = req.body.username;

    if (req.session && req.session.username) {
        // res.send(`Welcome ${user}`);
        res.render("welcome", {user: req.session.username}); 
    } else {
        res.redirect("/");
    }
})

app.get("/room1/", (req,res) => {
    res.render("room1");
})

app.get("/room2/", (req,res) => {
    res.render("room2");
})

app.get("/room3/", (req,res) => {
    res.render("room3");
})

app.get("/room4/", (req,res) => {
    res.render("room4");
})

app.get("/room5/", (req,res) => {
    res.render("room5");
})

app.get("/room6/", (req,res) => {
    res.render("room6");
})

app.get("/room7/", (req,res) => {
    res.render("room7");
})

app.get("/room8/", (req,res) => {
    res.render("room8");
})

app.get("/lose/", (req,res) => {
    res.render("lose");
})

app.get("/win/", (req,res) => {
    res.render("win");
})

app.listen(port, ()=> {
    console.log('listening on ${port}');
})
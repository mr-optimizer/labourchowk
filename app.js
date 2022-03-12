const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const cookieParser = require("cookie-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/")); // suggested
app.use(express.static("public"));
// const dotenv = require("dotenv");

const errorMiddleware = require("./backend/middlewares/errors");

//setting up config file
// dotenv.config({ path: "backend/config/config.env" });
if (process.env.NODE_ENV !== "PRODUCTION") require("dotenv").config({ path: "backend/config/config.env" });


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(fileUpload());


// importing all controlers
const { registerUser, loginUser, getRandomWorker } = require("./backend/controlers/user");
const { registerWorker, loginWorker } = require("./backend/controlers/worker");


// defining routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/signin", function(req, res) {
    res.render('signin')
})
app.get("/signup", function(req, res) {
    res.render('signup')
})
app.get("/labourprofile", function(req, res) {
    res.render('labourprofile')
})
app.get("/userprofile", function(req, res) {
    res.render('userprofile')
})


app.post('/registeruser', registerUser);
app.post('/loginUser', loginUser);

app.post('/registerworker', registerWorker);
app.post('/loginWorker', loginWorker);
app.post("/getWorker", getRandomWorker);

// middleware to handle errors
app.use(errorMiddleware);

module.exports = app;

// app.listen(3000, function(err){
//     if (err) console.log("Error in server setup")
//     console.log("Server listening on Port", 3000);
// })
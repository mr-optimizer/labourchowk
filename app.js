const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");

const errorMiddleware = require("./backend/middlewares/errors");

//setting up config file
// dotenv.config({ path: "backend/config/config.env" });
if(process.env.NODE_ENV !== "PRODUCTION")require("dotenv").config({ path: "backend/config/config.env" });


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(fileUpload());

// middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
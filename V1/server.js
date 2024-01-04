const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const dashboardRoutes = require("./routes/dashboard")

// .env config
require("dotenv").config({ path: "./config/.env"});

//Connect to Database
connectDB();

// Passport Config
require("./config/passport")(passport);

//EJS template  
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use method override
app.use(methodOverride("_method"));

//Sessions - stored in MongoDB
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors
app.use(flash());

//Route setup
app.use("/", mainRoutes);
app.use("/dashboard", dashboardRoutes);


//Server Notification
app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
});
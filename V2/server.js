const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");

// Dot env
require("dotenv").config();

// App
app.use(express.static(__dirname + "/V2/pubic"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));

// MongoDB
const database = process.env.URL;

const connectDB = async() => {
    try{
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`Database Connected`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

connectDB();

app.listen(process.env.PORT, () =>{
    console.log("Test Build Online")
});

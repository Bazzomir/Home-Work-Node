const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

mongoose
    .connect("mongodb://localhost:27017/lecture2")
    .then(()=>{
        const app = express();

        app.use(express.json())
        app.use("/api", routes)

        app.listen(5050, ()=>{
            console.log("Loading... Server has started!");
        })
    })
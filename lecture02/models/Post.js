const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    title: String,
    content: String
})


module.exports = mongoose.model("Post", testSchema);
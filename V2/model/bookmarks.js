const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    url: {
        type: String, 
        required: true
    },
    completed: {
        type: Boolean,
    },
})

module.exports = mongoose.model("Bookmark", BookmarkSchema);
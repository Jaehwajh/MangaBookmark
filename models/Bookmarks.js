const mongoose = require("mongoose");


const BookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // Image Cover
    // Synopsis
    url: {
        type: String,
        required: true
    },
    // caption: {
    //     type: String,
    //     required: true
    // },
    // rating: {
    //     type: Number 
    // },
    // completed: {
    //     type: Boolean,
    //     required: true,
    // },
    // reading: {
    //     type: Boolean,
    //     required: true,
    // },
    // toread: {
    //     type: Boolean,
    //     required: true,
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Bookmark", BookmarkSchema);
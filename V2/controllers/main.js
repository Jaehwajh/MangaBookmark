const Bookmark = require("../models/Bookmarks")

module.exports = {
    getDashboard: async (req, res) => {
        try {
            const bookmarks = await Bookmark.find();
            res.render("dashboard.ejs", {bookmarks});
        }catch (err) {
            console.log(err)
        }
    },
    createBookmark: async (req, res) => {
        try {
            await Bookmark.create({
                title: req.body.title,
                url: req.body.url,
                completed: false,
            });
            console.log("Bookmark saved!");
            res.redirect("/dashboard");
        } catch (err) {
            console.log(err);
        };
    },
    deleteBookmark: async (req, res) => {
        try {
            await Bookmark.findByIdAndRemove({ _id: req.params.id });
            console.log("Bookmark Deleted!");
            res.redirect("/dashboard");
        }catch (err) {
            res.redirect("/dashboard")
        }
    },
    completedBookmark: async (req, res) => {
    try {
        await Bookmark.findByIdAndUpdate({ _id: req.params.id }, {completed : true});
        console.log("Manga completed!");
        res.redirect("/dashboard");
    }catch (err) {
        res.redirect("/dashboard")
    }
   }
};
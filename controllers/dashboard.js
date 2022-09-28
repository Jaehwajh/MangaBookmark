const Bookmark = require("../models/Bookmarks")


module.exports = {
    getDashboard: async (req, res) => {
        try {
            const bookmarks = await Bookmark.find({ user: req.user.id });
            res.render("dashboard.ejs", { user: req.user, bookmarks: bookmarks });
        }catch (err) {
            console.log(err)
        }
    },
    createBookmark: async (req, res) => {
        try {
            await Bookmark.create({
                title: req.body.title,
                url: req.body.url,
                user: req.user.id,
                // caption: req.body.caption,
                completed: false,
                // reading: false,
                // readlist: false,
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
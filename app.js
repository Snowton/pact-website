// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const path = require("path");
const fs = require("fs");
// import faq from "./FAQ.js"
// import lecturers from "./guest_lecturers.js"
// import group_photos from "./group_photos.js"
const faq = require("./FAQ.js")
const bold_faq = require("./bold_faq.js")
const lecturers = require("./guest_lecturers.js")
const group_photos = require("./group_photos.js")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const root = "https://mighty-beyond-04832.herokuapp.com"
const nav = ['home', 'overview', 'logistics', 'application', 'faq', 'instructors', 'students']

app.get("/", (req, res) => {
    res.render("home", {url: root + req.url, img: root + "/img/home/" + "college.jpg", title: "PACT", nav: nav});
})

app.get("/instructors", (req, res) => {
    res.render("instructors", {lecturers: lecturers, url: root + req.url, img: root + "/img/home/" + "work.jpg", title: "Instructors | PACT", nav: nav})
})

// app.get("/program", (req, res) => {
//     res.redirect("/program/overview")
// })

app.get("/overview", (req, res) => {
    res.render("overview", {url: root + req.url, img: root + "/img/home/" + "expressions.jpg", title: "Overview | PACT", nav: nav})
})

app.get("/logistics", (req, res) => {
    res.render("logistics", {url: root + req.url, img: root + "/img/home/" + "fun.jpg", title: "Logistics | PACT", nav: nav})
})

app.get("/faq", (req, res) => {
    res.render("faq", {faq: faq, bold_faq: bold_faq, url: root + req.url, img: root + "/img/home/" + "lemma.jpg", title: "FAQ | PACT", nav: nav})
})

app.get("/application", (req, res) => {
    res.render("application", {url: root + req.url, img: root + "/img/home/" + "modern.jpg", title: "Application | PACT", nav: nav})
})

app.get("/students", (req, res) => {
    const baseDir = path.join(__dirname, "public", "img", "group_photos");

    // Suppose you have groups defined like this:
    const groups = ["2023", "2024", "2025"]; // folder names

    // Build slideshow_photos dynamically
    const slideshow_photos = group_photos.slideshow_photos.map(groupName => {
        const dir = path.join(baseDir, groupName);
        let files = [];
        try {
            files = fs.readdirSync(dir)
                .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file)); // only images
        } catch (err) {
            console.error(`Error reading directory ${dir}:`, err);
        }
        return [groupName, files];
    });

    // res.render("students", {group_photos, group_photos, url: root + req.url, img: root + "/img/home/" + "summer.jpg", title: "Students | PACT", nav: nav})
    res.render("students", {group_photos, slideshow_photos, url: root + req.url, img: root + "/img/home/" + "summer.jpg", title: "Students | PACT", nav: nav})
})

// OLD URLS

app.get("/registration", (req, res) => {
    res.redirect("/application")
})

app.get("/program-organization", (req, res) => {
    res.redirect("/overview")
})

app.get("/about-the-instructors", (req, res) => {
    res.redirect("/instructors")
})

app.get("/guest-lecturers", (req, res) => {
    res.redirect("/instructors")
})

// 404

app.get("*", function(req, res) {
    res.status(404)
    res.render("404.ejs", {attempted: req.url, url: root + req.url, img: root + "/img/home/" + "chalkboard.jpg", title: "Page Not Found | PACT", nav: nav})
})

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) console.log("successfully started on port 3000 or process.env.PORT");
    else console.log(err);
})
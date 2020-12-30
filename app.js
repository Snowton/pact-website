import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
import faq from "./FAQ.js"
import lecturers from "./guest_lecturers.js"
import group_photos from "./group_photos.js"

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const root = "https://mighty-beyond-04832.herokuapp.com"

app.get("/", (req, res) => {
    res.render("home", {url: root + req.url, img: root + "/img/home/" + "work.jpg"});
})

app.get("/instructors", (req, res) => {
    res.render("instructors", {lecturers: lecturers, url: root + req.url, img: root + "/img/home/" + "college.jpg"})
})

app.get("/program", (req, res) => {
    res.redirect("/program/overview")
})

app.get("/program/overview", (req, res) => {
    res.render("program/overview", {url: root + req.url, img: root + "/img/home/" + "expressions.jpg"})
})

app.get("/program/logistics", (req, res) => {
    res.render("program/logistics", {url: root + req.url, img: root + "/img/home/" + "fun.jpg"})
})

app.get("/program/faq", (req, res) => {
    res.render("program/faq", {faq: faq, url: root + req.url, img: root + "/img/home/" + "lemma.jpg"})
})

app.get("/application", (req, res) => {
    res.render("application", {url: root + req.url, img: root + "/img/home/" + "modern.jpg"})
})

app.get("/students", (req, res) => {
    res.render("students", {group_photos, group_photos, url: root + req.url, img: root + "/img/home/" + "summer.jpg"})
})

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) console.log("successfully started on port 3000");
    else console.log(err);
})
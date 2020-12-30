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
    res.render("home", {url: root + req.url, img: root + "/img/home/" + "college.jpg", title: "PACT"});
})

app.get("/instructors", (req, res) => {
    res.render("instructors", {lecturers: lecturers, url: root + req.url, img: root + "/img/home/" + "work.jpg", title: "Instructors | PACT"})
})

app.get("/program", (req, res) => {
    res.redirect("/program/overview")
})

app.get("/program/overview", (req, res) => {
    res.render("program/overview", {url: root + req.url, img: root + "/img/home/" + "expressions.jpg", title: "Program Overview | PACT"})
})

app.get("/program/logistics", (req, res) => {
    res.render("program/logistics", {url: root + req.url, img: root + "/img/home/" + "fun.jpg", title: "Program Logistics | PACT"})
})

app.get("/program/faq", (req, res) => {
    res.render("program/faq", {faq: faq, url: root + req.url, img: root + "/img/home/" + "lemma.jpg", title: "Program FAQ | PACT"})
})

app.get("/application", (req, res) => {
    res.render("application", {url: root + req.url, img: root + "/img/home/" + "modern.jpg", title: "Application | PACT"})
})

app.get("/students", (req, res) => {
    res.render("students", {group_photos, group_photos, url: root + req.url, img: root + "/img/home/" + "summer.jpg", title: "Students | PACT"})
})

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) console.log("successfully started on port 3000");
    else console.log(err);
})
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

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/instructors", (req, res) => {
    res.render("instructors", {lecturers: lecturers})
})

app.get("/program", (req, res) => {
    res.redirect("/program/overview")
})

app.get("/program/overview", (req, res) => {
    res.render("program/overview")
})

app.get("/program/logistics", (req, res) => {
    res.render("program/logistics")
})

app.get("/program/faq", (req, res) => {
    res.render("program/faq", {faq: faq})
})

app.get("/application", (req, res) => {
    res.render("application")
})

app.get("/students", (req, res) => {
    res.render("students", {group_photos, group_photos})
})

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) console.log("successfully started on port 3000");
    else console.log(err);
})
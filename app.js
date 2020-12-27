const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/instructors", (req, res) => {
    res.render("instructors")
})

app.get("/program", (req, res) => {
    res.redirect("/program/overview")
})

app.get("/program/overview", (req, res) => {
    res.render("program/overview")
})

app.get("program/logistics", (req, res) => {
    res.render("program/logistics")
})

app.get("/program/faq", (req, res) => {
    res.render("program/faq")
})

app.get("/application", (req, res) => {
    res.render("application")
})

app.get("/students", (req, res) => {
    res.render("students")
})

app.listen(3000, (err) => {
    if (!err) console.log("successfully started on port 3000");
    else console.log(err);
})
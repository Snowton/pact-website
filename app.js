const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.listen(3000, (err) => {
    if (!err) console.log("successfully started on port 3000");
    else console.log(err);
})
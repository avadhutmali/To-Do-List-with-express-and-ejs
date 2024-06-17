const express = require("express");
const app = express();
const body = require("body-parser");
const dayName = require(__dirname + "/date.js")

console.log(dayName.getDate())

app.use(body.urlencoded({ extended: true }));
app.use(express.static("public"));

//Using the ejs 
app.set('view engine', 'ejs');
var taskNames = [];
var workItems = [];

////////getting stage
app.get("/", function (req, res) {

    let day = dayName.getDate();

    res.render('list', { listTitle: day, listName: taskNames });
})

///////posting stage
app.post("/", function (req, res) {

    taskName = req.body.task;

    if (req.body.list === "Work-List") {
        workItems.push(taskName);
        res.redirect("/work");
    } else {
        taskNames.push(taskName);
        res.redirect("/");
    }


})


////for work page
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work-List", listName: workItems })
})
app.get("/about", function (req, res) {
    res.render("about")
})

//get stagte for work page
app.post("/work", function (req, res) {
    let item = req.body.task;
    workItems.push(item);
    res.redirect("work")
})


app.listen(3000, () => { console.log("Server Is Starting") })
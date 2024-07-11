require("../config/db")


let mongoose = require("mongoose");

let StuSchema = mongoose.Schema({
    name : String,
    age : Number
}, { collection : "student" })

let Student = mongoose.model("student", StuSchema);

module.exports = Student;

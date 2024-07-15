require("../config/db");

let mongoose = require("mongoose");

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : String,
    class : Number, 
    gender : String,
    city : String,
    contact : Number
})

let Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;
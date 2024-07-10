let mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/tss4");

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    city : String
});

let Teacher = mongoose.model("teacher", TeacherSchema); 

module.exports = Teacher;
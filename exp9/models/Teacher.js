require("../config/db");
const mongoose = require("mongoose")

const TeacherSchema = mongoose.Schema({
    name : String,
    class : Number,
    salary : Number,
    gender : String,
    city : String,
    contact : Number
})

const Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;
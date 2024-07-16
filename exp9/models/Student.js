require("../config/db");

const mongoose = require("mongoose");

const StuSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    city : String
}, {collection : "student"})

const Stu = mongoose.model("student", StuSchema);

module.exports = Stu;
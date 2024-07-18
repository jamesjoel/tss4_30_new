require("../config/db");

const mongoose = require("mongoose");

const StaffSchema = mongoose.Schema({
    name : String,
    age : Number,
    salary : Number,
    city : String
})

module.exports = mongoose.model("staff", StaffSchema);



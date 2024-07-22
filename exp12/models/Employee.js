require("../config/db");

// ORM --- 
let mongoose = require("mongoose");

let EmpSchema = mongoose.Schema({
    name : String,
    salary : Number,
    city : String,
    gender : String
})

module.exports = mongoose.model("employee", EmpSchema);
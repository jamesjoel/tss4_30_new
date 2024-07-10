let mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss4");

let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    address : String,
    password : String,
    city : String,
})

let User = mongoose.model("user", UserSchema);

module.exports = User;


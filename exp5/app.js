let express = require("express")
let mongoose = require("mongoose");
let app = express();


mongoose.connect("mongodb://0.0.0.0:27017/tss4");

let StudentSchema = mongoose.Schema({
    name : String,
    age : Number
})

let Stu = mongoose.model("student", StudentSchema);



app.get("/api/v1/student", async (req, res)=>{
    let data = await Stu.find();
    res.send(data);
})


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
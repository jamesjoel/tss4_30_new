let express = require("express");
let app = express();
let Stu = require("stu");

app.get("/", (req, res)=>{
    // let result = Stu.find();
    // res.send(result);
    Stu.find((result)=>{
        res.send(result);
    })
})

app.listen(3000, ()=>{
    console.log("$$$$$$$$$$$$ -- second")
    console.log("########### -- third")
})






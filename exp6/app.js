let express = require("express");
let app = express();
let Teacher = require("./models/Teacher")
let User = require("./models/User")


app.use(express.json())
app.use(express.urlencoded({ extended : true }));


app.get("/api/v1/teacher", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})

app.get("/api/v1/user", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})


app.get("/teacher", (req, res)=>{
    res.sendFile(__dirname+"/teacher.html")
})

app.post("/save", async(req, res)=>{
    await Teacher.create(req.body);
})






let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
});
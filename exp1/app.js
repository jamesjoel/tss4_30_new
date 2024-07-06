let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html")
})

app.get("/contactus", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
    // res.send("welcome");
})



// the .listen() fun is used for create virtual server
app.listen(3000, ()=>{
    console.log("server running");
});






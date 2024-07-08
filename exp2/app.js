let express = require("express");
// require the express module

let app = express();
// call the express function and make a var like "app"


// now we can create our route

app.get("/", (request, response)=>{
    response.sendFile(__dirname+"/welcome.html");
});

// localhost:3000/jamesjoel/tss3

app.get("/jamesjoel/tss3", (req, res)=>{
    res.sendFile(__dirname+"/home.html")
});


/*
    app.get("string", callback-fun)

*/


// create a vertiual server with port 3000
app.listen(3000, ()=>{
    console.log("server running");
})
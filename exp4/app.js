let express = require("express");
let app = express();

// localhost:3000/api/user


app.get("/api/user", (req, res)=>{

    let data = [
        {
            name : "Rohit",
            age : 20,
            city : "indore"
        },
        {
            name : "Amar",
            age : 22,
            city : "indore"
        },
        {
            name : "Vijay",
            age : 25,
            city : "mumbai"
        },
        {
            name : "Nidhi",
            age : 20,
            city : "pune"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        }
    ]

    res.send(data);

})

// localhost:3000/api/v1/student

app.get("/api/v1/student", (req, res)=>{
    let student = [
        {
            name : "Rohit",
            age : 20,
            city : "indore"
        },
        {
            name : "Amar",
            age : 22,
            city : "indore"
        },
        {
            name : "Vijay",
            age : 25,
            city : "mumbai"
        },
        {
            name : "Nidhi",
            age : 20,
            city : "pune"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        },
        {
            name : "Jaya",
            age : 27,
            city : "mumbai"
        }
    ]
    res.send(student)
})


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})
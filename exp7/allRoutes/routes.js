let routes = require("express").Router();
let Student = require("../models/Student")

routes.get("/api/v1/student", async(req, res)=>{
    console.log("welcome")
    let result = await Student.find();
    res.send(result);
})

routes.post("/api/v1/add-student", async(req, res)=>{
    await Student.create(req.body);
    res.send({ success : true });
})

module.exports = routes;
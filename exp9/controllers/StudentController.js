const routes = require("express").Router();
const Stu = require("../models/Student");


routes.get("/", async(req, res)=>{
    let result = await Stu.find();
    res.send(result);
})

routes.get("/:gender", async(req, res)=>{
    let result = await Stu.find({ gender : req.params.gender });
    res.send(result);
})

routes.get("/:gender/:city", async(req, res)=>{
    let result = await Stu.find({ gender : req.params.gender, city : req.params.city });
    res.send(result);
})

routes.get("/:gender/:city/:age", async(req, res)=>{
    let result = await Stu.find({ gender : req.params.gender, city : req.params.city, age : req.params.age });
    res.send(result);
})


module.exports = routes;

/*

        .find()   ----- all

        .find({ age :  20 })

        .find({ age : 20, city : "indore"})


*/
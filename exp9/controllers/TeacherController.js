const routes = require("express").Router();
const Teacher = require("../models/Teacher");
// localhost:3000/api/v1/product/


routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
});


module.exports = routes;
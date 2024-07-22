const routes = require("express").Router();
const Employee = require("../models/Employee");


routes.get("/", async(req, res)=>{
    let result = await Employee.find();
    res.send(result);
})
routes.get("/:type/:value", async(req, res)=>{
    let where = {};
    where[req.params.type] = req.params.value;
    let result = await Employee.find(where);
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Employee.create(req.body);
    res.send({ success : true })
})
routes.delete("/:type/:value", async(req, res)=>{
    let where = {};
    where[req.params.type] = req.params.value;
    await Employee.deleteMany(where);
    res.send({ success : true })
})
routes.put("/:type/:value", async(req, res)=>{
    let where = {};
    where[req.params.type] = req.params.value;
    await Employee.updateMany(where, req.body);
    res.send({ success : true })
})

module.exports = routes;


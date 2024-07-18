const routes = require("express").Router();
const Staff = require("../models/Staff")

routes.get("/", async(req, res)=>{
    let result = await Staff.find();
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Staff.create(req.body);
    res.send({ success : true });
})

routes.delete("/:type/:value", async(req, res)=>{
    // console.log(req.params);
    let type = req.params.type; // age
    let value = req.params.value; // 25

    let where = {};
    where[type] = value;
    
    await Staff.deleteMany(where)
    res.send({ success : true });
});

module.exports = routes;
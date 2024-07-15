let Teacher = require("../models/Teacher");

routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Teacher.create(req.body);
    res.send({ success:true });
})

module.exports = routes;
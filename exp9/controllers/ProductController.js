const routes = require("express").Router();
const Product = require("../models/Product");
// localhost:3000/api/v1/product/


routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
});

routes.get("/:x", async(req, res)=>{
    let a = req.params.x.toLowerCase();
    let result = await Product.find({ category : a });
    if(result.length==0)
    {
        res.send({ message : "No Data Found "});

    }
    else{

        res.send(result);
    }


})


routes.post("/", async(req, res)=>{
     
    req.body.category = req.body.category.toLowerCase();

    await Product.create(req.body);
    res.send({ success : true });
});


module.exports = routes;
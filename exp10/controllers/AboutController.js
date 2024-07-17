let routes = require("express").Router();


routes.get("/", (req, res)=>{
    res.send("about page")
})
routes.get("/demo1", (req, res)=>{
    res.send("about---demo1 page")
})
routes.get("/demo2", (req, res)=>{
    res.send("about---demo2 page")
})

module.exports = routes;
let routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("home page");
})

module.exports = routes;
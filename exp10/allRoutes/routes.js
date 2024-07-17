let routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
// routes.use("/contact", require("../controllers/ContactController"));
// routes.use("/help", require("../controllers/HelpController"));
routes.get("*", (req, res)=>{
    res.redirect("/")
})



module.exports = routes;
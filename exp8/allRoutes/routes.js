/*
    let express = require("express")
    let app = express();
*/
let routes = require("express").Router();


routes.use("/api/v1/teacher", require("../controllers/TeacherController"));
module.exports = routes;
const routes = require("express").Router();

routes.use("/api/v1/staff", require("../controllers/StaffController"));

module.exports = routes;
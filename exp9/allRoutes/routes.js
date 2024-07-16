const routes = require("express").Router();

routes.use("/api/v1/product", require("../controllers/ProductController"));
routes.use("/api/v1/teacher", require("../controllers/TeacherController"));
routes.use("/api/v1/student", require("../controllers/StudentController"));

module.exports = routes;
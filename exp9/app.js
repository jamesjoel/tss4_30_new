const express = require("express");
const app = express(); // call the express constructor

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(require("./allRoutes/routes"));

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})
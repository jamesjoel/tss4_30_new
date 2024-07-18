const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(require("./routes/allRoutes"))


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("sever running ");
})
let express = require("express");
let app = express();
let routes = require("./allRoutes/routes")
//these code/function will convert req.body (incomming data) into JSON fromat
app.use(express.json())
app.use(express.urlencoded({ extended : true }));


app.use(routes);


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port)
})
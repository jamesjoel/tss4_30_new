const DB_URL = require("./constants");

require("mongoose").connect(DB_URL)
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("NOT CONNECTED ", err);
})
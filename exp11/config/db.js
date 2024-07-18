require("mongoose").connect("mongodb://0.0.0.0:27017/tss4_new")
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("NOT CONNECTED", err)
})
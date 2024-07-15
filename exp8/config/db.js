require("mongoose")
.connect("mongodb://0.0.0.0:27017/tss4")
.then(()=>{
    console.log("CONNECTED ------")
})
.catch(()=>{
    console.log("NOT ---- CONNECTED ------")
})
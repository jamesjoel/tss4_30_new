require("mongoose")
.connect("mongodb://0.0.0.0:27017/tss4")
.then(()=>{
    console.log("CONNCETED -----")
})
.catch(()=>{
    
    console.log("NOT ----- CONNCETED -----")
})
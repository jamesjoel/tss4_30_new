let a = "India";
let b = "USA";


let fun = (a)=>{
    let val = a*a;
    console.log("*******")
    return { 
            info : val,
            hello : (x)=>{
                return {
                    ans : x*x
                }
            }
        };
}

let arr = [a, b, fun];
module.exports = arr;

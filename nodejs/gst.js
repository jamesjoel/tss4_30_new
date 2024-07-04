let gst = (price, slab)=>{
    if(slab==1){
        let x = price*5/100;
        let y = x+price;
        return y;
    }
    else if(slab==2){
        let x = price*8/100;
        let y = x+price;
        return y;
    }
    else if(slab==3){
        let x = price*18/100;
        let y = x+price;
        return y;
    }
    else{
        let x = price*28/100;
        let y = x+price;
        return y;
    }
}


let ans1 = gst(10000, 3)
let ans2 = gst(15000, 1)
let ans3 = gst(30000, 2)
let ans4 = gst(7000, 4)

console.log(ans1)
console.log(ans2)
console.log(ans3)
console.log(ans4)
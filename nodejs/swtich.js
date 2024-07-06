console.log("welcome");
let gst = (price, slab) =>{
    let x = 0;
    let y = 0;
    switch(slab)
    {
        case 1 : x = price*5/100;
                y = x+price;
                break;
        case 2 : x = price*8/100;
                y = x+price;
                break;
        case 3 : x = price*18/100;
                y = x+price;
                break;
        case 4 : x = price*28/100;
                y = x+price;
                break;
        default : y = "Invalid input";
    }

    return y;

}

module.exports = gst;

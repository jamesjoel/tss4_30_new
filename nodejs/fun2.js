function demo(a=1, b=1, c=2) // parameterized fun
{
    
    

    let x = a*b;
    let y = x/c;

    console.log(y);
}

demo(10, 3, 5)
demo(20, 5, 10)
demo(25, 10, 2)

demo(10, 20)
demo(40)
demo()
// let arr = [5, 12, 20];

// let arr2 = arr;

// arr[0] = "rohit";

// console.log(arr)
// console.log(arr2)


let user = {
    name : "rohit",
    age : 20
}

let user2 = user;

user.name = "amar";
user.age = 30;

// console.log(user)
// console.log(user2)



let arr = ["red", "green", "blue", "Yellow", "pink", "black"];

let [...demo] = arr;




arr[1] = 5000;

console.log(arr);
console.log(demo);

const { addItem, changeQty,name } = require("./Cart");


console.log("My first node js project");
console.log(10+40);
let arr=[1,2,3,4,5,6];
let arr1=arr.map((val,idx)=>val*2);
console.log(arr1);
console.log(addItem());
console.log(changeQty());
console.log(name);
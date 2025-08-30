// What will be logged in first example and in second example?
//
let var1;
console.log(var1); //undefined
console.log(typeof var1); //undefined

let var2 = null;
console.log(var2); //null
console.log(typeof var2); //object 

console.log(null == undefined);  // true   (loose equality: both mean no value)
console.log(null === undefined); // false  (strict equality: different types)

/*
undefined → A variable that has been declared but not assigned any value.

null → An explicit assignment value representing “no value” or “empty”.
*/
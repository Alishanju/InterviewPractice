// What will be console.logged here

/*
Concept:
Hoisting -> declaration of varaible bubbles to the top => works for var keyword and function declaration

Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution).

➡️ In simple terms:
Variables and function declarations are "hoisted" to the top of their scope, but initializations/assignments are not.

let and const
They are also hoisted, but placed in a Temporal Dead Zone (TDZ) until the line of initialization.
Accessing before initialization throws ReferenceError.

function declartion -> hoists both name and body,you can call them before declaration

function expression: only variable hoisted not function assignment, for var:undefined, for let/const reference error(tdz)


*/
//imp::run each question seperately not at once
// Question 1
console.log(foo);
 foo = 1; //Reference error :foo is not defined

// question 2
console.log(foo); //undefined
var foo = 2;
//
/*
the above code is interpreted same as 
var foo;
console.log(foo);
foo=2;
}

*/


// question 3
 foo = 3;
console.log(foo); //3
var foo;

/*
the above code is interpreted same as 
var foo;
foo=3;
console.log(foo);
}

*/
// question 4 -> function declaration
greet();  // "Hello!"

function greet() {
  console.log("Hello!");
}

//question 5: function expression
sayHi(); // TypeError: sayHi is not a function -> calling undefined throws typeerror as undefined is not function
var sayHi = function() {
  console.log("Hi!");
};

//usage of let/const in above instead of var throws reference error
//for func expression,using let => ReferenceError: Cannot access 'sayHi' before initialization
//ReferenceError: Cannot access 'foo' before initialization
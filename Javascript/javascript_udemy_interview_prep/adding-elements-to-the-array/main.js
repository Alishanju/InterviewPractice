// Write a function which get's an array and an element and returns a array with this element at the end
//array and object are refernece types in javascript , if used push/pop/splice, original array gets changed 

const nums=[1,2,3];

const append=(arr,el)=>{
    return [...arr,el]; //use spread operator to copy existing array and perform operation on top it so it doesnt mutate original array 
}

const newNums=append(nums,4); //append is pure function here as it doesnt modify any global variables and retrun same output for same input everytime
const newNums1=append(nums,4); 
console.log(newNums); //[1,2,3,4]
console.log(newNums1); //[1,2,3,4]
console.log(nums);  //[1,2,3]

//Impure function -> bad way to do (not prefered) refer down

const numsImpure=[1,2,3];

const appendImpure=(arr,el)=>{
    arr.push(el); //push modifies existing array
    return arr; 
}

const newNumsImpure=appendImpure(numsImpure,4); //append is impure function here as it modify existing array
const newNums1Impure=appendImpure(numsImpure,4); 
console.log(numsImpure);  //[1,2,3,4,4]
console.log(newNumsImpure); //[1,2,3,4,4]
console.log(newNums1Impure); //[1,2,3,4,4]
console.log(numsImpure);  //[1,2,3,4,4]

/*
A pure function in JavaScript is a function that follows these two main rules:

Deterministic (Same input → Same output)

For the same set of input values, it always returns the same result.

Example: add(2,3) will always return 5.

No side effects

It doesn’t modify anything outside of itself (no mutation of global variables, DOM, API calls, console logs, random numbers, etc.).

It only depends on its input parameters and doesn’t change external state.


pure function:
map returns a new array without modifying the original.

filter returns a new filtered array.

reduce accumulates values into a new result.

But methods like push, pop, splice are not pure because they modify the original array.
*/
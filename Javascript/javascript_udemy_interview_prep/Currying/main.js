// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?
/*
Operator	                Location	    Purpose
...args, ...next	Function parameters   	Rest — collects multiple arguments into an array
...args, ...next	Function calls	        Spread — expands an array into individual arguments
*/

//Currying is a technique where a function with multiple arguments is transformed into a sequence of nested functions each taking one argument.

function multiply(a){
    return function(b){
        return a*b;
    }
}
//simplified version using arraow functions:
//const multiply=(num1)=>(num2)=>(num1*num2)  -> works exactly same way

const double=multiply(2); //partial application
const triple=multiply(3);
console.log(double(10)); //20
console.log(triple(10)); //30
console.log(multiply(10)(20)); //200
console.log(multiply(10,20)); //20 ignored,return inner function itelse
/*
o/p:
ƒ (b){
        return a*b;
    }
*/


 //Curry function 
function curry(fn){
    return function curried(...args){
        if(args.length >=fn.length){
            return fn(...args);
        }else{
            return (...next)=> curried(...args,...next);
        }
    }
}

const Sum=(a,b,c)=>{
    return a+b+c;
}
const SumCurry=curry(Sum);
console.log(SumCurry(1)(2)(3)); //6
console.log(SumCurry(1,2)(3)); //6
console.log(SumCurry(1)(2,3)); //6
console.log(SumCurry(1,2,3)); //6

//curry functions real usage:
// we can curry get and map 
const get=curry((property,object)=> object[property]);
console.log(get('id',{id:1,name:"Alisha"})) //1
const   Name=get("name");
console.log(Name({id:"1",name:"Alisha"})); //Alisha
console.log(Name({name:"Anjum",age:25})); //Anjum

const map=curry((fn,values)=> values.map(fn));
const getNames=map(Name);
console.log(getNames([{id:"1",name:"Alisha"},{name:"Anjum",age:25}])); //[ 'Alisha', 'Anjum' ]


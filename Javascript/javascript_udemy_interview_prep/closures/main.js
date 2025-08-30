// Create a counter function which has increment and getValue functionality
//IIFES,CALLBACKS ETC are closures in js
//closure means we have access to inside of a function to the outside scope
const PrivateCounter=()=>{
    let count=0; //private
    function increment(val=1){
        count+=val;

    }
    function getValue(){
        return count;
    }

    return {increment,getValue}
}

const Counter=PrivateCounter();
console.log(Counter.getValue()); //0
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getValue()); //5
console.dir(Counter.getValue); //check dir logs in chrome inspect ,it has scope closure 
console.dir(Counter.increment);
/*
0
main.js:22 5
main.js:23 ƒ getValue()length: 0name: "getValue"prototype: {}arguments: nullcaller: null[[FunctionLocation]]: main.js:8[[Prototype]]:
 ƒ ()[[Scopes]]: Scopes[3]0: Closure (PrivateCounter) {count: 5}1: Script {Counter: {…}, PrivateCounter: ƒ}2: 
 Global {window: Window, self: Window, document: document, name: '', location: Location, …}
main.js:24 ƒ increment(val=1)length: 0name: "increment"prototype: {}arguments: nullcaller: null[[FunctionLocation]]: m
ain.js:4[[Prototype]]: ƒ ()[[Scopes]]: Scopes[3]0: Closure (PrivateCounter) {count: 5}1:
 Script {Counter: {…}, PrivateCounter: ƒ}2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

*/

const PrivateSecret=()=>{
    const secret="I have a Secret";
    return () => secret;
}
const getSecret=PrivateSecret(); //PrivateSecret returns a fucntion ,and calling that function returns a secret
console.log(getSecret()); //I have a Secret



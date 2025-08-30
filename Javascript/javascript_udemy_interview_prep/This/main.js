// What will be logged here?

// //Task 1
// function getItem() {
//   console.log(this); //inside function  you have reference to global object (window)
// }

// getItem(); 
/* o/p:
Window
GetParams
: 
ƒ (e)
alert
: 
ƒ alert()
atob

ƒ ....  
[[Prototype]]: Window
*/



// // Task 2
// const item = {
//   title: "Ball",
//   getItem() {
//     console.log("this", this); //inside object you have refernce to object itself
//   },
// };

// item.getItem();
/*
o/p in compiler:
this { title: 'Ball', getItem: [Function: getItem] } 

o/p in chrome:
this ObjectgetItem: ƒ getItem()title: "Ball"[[Prototype]]: Object

*/



// Task 3
class Item {
  title = "Ball"; //in classes, you have reference to instance of the class
  getItem() {
    console.log("this1",this)
    function someFn() {
      console.log("this", this); //in classes inside function,its undefined 
    someFn();
    }
    someFn();
  }
}

const item = new Item();
item.getItem();
/*
o/p: 
this1 Item { title: 'Ball' }
this undefined 

inchrome:
this1 Itemtitle: "Ball"[[Prototype]]: Object
main.js:51 this undefined*/

//,use arrow functions to fix it instead of function keyword like  const somefn=()=>  console.log("this", this);somefn(); o/p:this1 Item { title: 'Ball' }

// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

//use some => check for existence, return true if atleast one element present else false
const checkIfNameExists=(name,users)=> users.some(user => user.name===name);

console.log(checkIfNameExists("John",users)); //true
console.log(checkIfNameExists("Alisha",users)); //false

//use find(return only first element matching the criteria)/findindex(index>=0 if found, else -1 if index not found)

const checkIfNameExists1=(name,users)=> {
  const user=users.find(user => user.name===name);
  return Boolean(user);
}
/*
const checkIfNameExists1=(name,users)=> {
  const userIdx=users.findIndex(user => user.name===name);
  return userIdx>=0
}
  */ 

console.log(checkIfNameExists1("John",users)); //true
console.log(checkIfNameExists1("Alisha",users)); //false

//filter vs some vs find vs findIndex

/*
⚡ Comparison Table
Method	        Return Type	        Multiple Matches	       If Not Found	      Best For
filter()	       Array	             ✅ returns all	             []	            Get all matching items
find()	        Element (object)	    ❌ only first	         undefined	        Get first matching item
some()	          Boolean	              ❌ just true/false      	false         	Existence check
findIndex()	    Number (index)	          ❌ only first	          -1	      Update/remove by index
*/
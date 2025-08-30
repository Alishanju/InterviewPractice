// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];
console.log("users array with objects:",users);  

/* 
output:
users array with objects: [
  { id: 1, name: 'Jack', isActive: true, age: 20 },
  { id: 2, name: 'John', isActive: true, age: 18 },
  { id: 3, name: 'Mike', isActive: false, age: 30 }
]
  */ 


//***Task 1 **** 
// 1st solution
// const userNames=[];
// for(let i=0;i<users.length;i++){
//   userNames.push(users[i].name);
// }

// console.log("userNames arrays:",userNames);

//2nd solution
// const names=[];
// users.forEach(user => {
//   names.push(user.name);
// })
// console.log("names array:"+names);

//Optimal solution -> map
const names=users.map(user => user.name);
console.log("names array using map:",names);
/*
output:
names array using map: [ 'Jack', 'John', 'Mike' ]
*/


//***Task 2 **** 
// const activeUsers=users.filter(user => user.isActive === true);
// console.log("Active users arrays:",activeUsers); //this is array of active users objects
const activeUsers=users.filter(user => user.isActive).map(user => user.name);
console.log("only active users arary using filter and map:",activeUsers); 
/* 
output:
only active users arary using filter and map: [ 'Jack', 'John' ]
*/

//***Task 3 **** 
const DescActiveUsers=users.sort((a,b)=> b.age-a.age)
.filter(user => user.isActive)
.map(user => user.name);

console.log("descending order of active users names:",DescActiveUsers);
/* output:
descending order of active users names: [ 'Jack', 'John' ]
*/

/*
Custom Sorting with a Compare Function:
To sort numbers or objects accurately, a compareFunction must be provided as an argument to sort().
The compareFunction takes two arguments, a and b, representing two elements being compared.
It should return:
A negative value if a should come before b.
Zero if a and b are considered equal (no change in relative order).
A positive value if b should come before a.


    const numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => a - b); // numbers is now [1, 5, 10, 25, 40, 100] //ascending order
        const numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => b - a); // numbers is now [100, 40, 25, 10, 5, 1] //descending order
*/
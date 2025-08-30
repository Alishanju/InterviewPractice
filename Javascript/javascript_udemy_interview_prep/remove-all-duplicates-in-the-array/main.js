// Remove all duplicates in the array

//method1
const uniqueArr=(arr)=>{
    return [...new Set(arr)];

}
const nums=[1,2,3,4,3,2,5]
console.log(uniqueArr(nums)); //[ 1, 2, 3, 4, 5 ]

//method2
const uniqueArr1=(arr)=>{
    return arr.reduce((acc,el)=> {
        return acc.includes(el) ? acc : [...acc,el]

    },[])
}
console.log(uniqueArr1(nums)); //[ 1, 2, 3, 4, 5 ]

//handling duplicate objects in array -> since objects are references in js, they store in different memory even they appear same, so using set doesnt work 

const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "John" },
  { id: 1, name: "Jack" }, // duplicate id 1
  { id: 3, name: "Mike" },
  { id: 2, name: "John" }  // duplicate id 2
];

const pairs=users.map(user => [user.id,user]); //build key value pairs
// pairs is:
// [
//   [1, { id: 1, name: "Jack" }],
//   [2, { id: 2, name: "John" }],
//   [1, { id: 1, name: "Jack" }], // duplicate pair
//   [3, { id: 3, name: "Mike" }],
//   [2, { id: 2, name: "John" }]  // duplicate pair
// ]

const map=new Map(pairs)
/// Map will keep only one value per key; later entries overwrite earlier ones
// Internally map now contains entries for keys 1,2,3 — with the last occurrence's object

const uniqueUsers = Array.from(map.values());
// or: const uniqueUsers = [...map.values()];

console.log(uniqueUsers);
// [
//   { id: 1, name: "Jack" },
//   { id: 2, name: "John" },
//   { id: 3, name: "Mike" }
// ]



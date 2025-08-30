// Write a function which implements shuffle
//method 1
// const shuffle=(arr)=>{
//     return arr.map(item => ({random:Math.random(),value:item}))
//     .sort((a,b)=> a.random-b.random)
//     .map(item => item.value)
// }
// const arr=[1,2,3,4,5,6];
// const arr1=shuffle(arr)
// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr1) //shuffles array ,[ 1, 6, 5, 2, 3, 4 ] etc

//method 2
//Every element has an equal probability of ending up in any position.shuffles array inplace unlike method 1 which creates new array
//Best way — Fisher–Yates Shuffle (Knuth Shuffle)
const shuffle=(arr)=>{
for(let i=arr.length-1;i>=0;i--){
let j=Math.floor(Math.random()*(i+1));
[arr[i],arr[j]] =[arr[j],arr[i]]
}
return arr;

};

const arr=[1,2,3,4,5];

console.log(shuffle(arr)); //[ 3, 4, 5, 1, 2 ]
console.log(arr); //[ 3, 4, 5, 1, 2 ]

//swap using destructing assignement

let a = 10, b = 20;

[a, b] = [b, a]; 

console.log(a, b); // 20 10
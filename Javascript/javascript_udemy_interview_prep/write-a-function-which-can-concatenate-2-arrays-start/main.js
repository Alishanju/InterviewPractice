// Write a function which can concatenate 2 arrays
//push alone is bad approach as shown below

// const mergeArrays=(arr1,arr2)=>{
//     arr1.push(...arr2);
//     return arr1;


// }

// const nums1=[1];
// const nums2=[2,3];

// const mergedArr=mergeArrays(nums1,nums2);
// console.log(mergedArr); //[1,2,3]
// console.log(nums1); //[1,2,3] -> not good practice
// console.log(nums2); //[2,3]


//spread/concat are best options to merge arrays , pure doesnt modify original array/objects


const mergeArrays=(arr1,arr2)=>{
   //return arr1.concat(arr2) //or can concat 3 arr too,arr1.concat(arr2,arr3) ;concat returns new array
   return [...arr1,...arr2]


}

const nums1=[1];
const nums2=[2,3];

const mergedArr=mergeArrays(nums1,nums2);
console.log(mergedArr); //[1,2,3]
console.log(nums1); //[1] -> doesnt mutate (same o/p for concat and spread )
console.log(nums2); //[2,3]


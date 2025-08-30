// Find the number of occurences of minimum value in the list

//Math.min(...[1,2,3]) => 1
const arr = [1, 2, 3, 1, 1];
const minValue=Math.min(...arr);
const minArr=arr.filter(item => item===minValue);
console.log(minArr.length); //3

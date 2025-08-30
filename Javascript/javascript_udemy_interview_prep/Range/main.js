// Write a function which implement range

//Array.from():
/*
It creates a new array from:

An iterable (like string, Set, Map, etc.)

Or an array-like object (something with length and indexed elements).

It also takes an optional mapping function.

onst obj = { 0: "a", 1: "b", length: 2 };
const arr = Array.from(obj);
console.log(arr); // ['a','b']

console.log(Array.from("abc")); // ['a','b','c']
*/

// range(1, 50)
// 1,2,3,4,5,6,...,50

const range=(start,end)=>{
    let result=[];
    for(let i=start;i<=end;i++){
        result.push(i);
    }
    return result;

}

console.log(range(1,50));
console.log(range(30,60));

//Method 2

const range1=(start,end)=>{
    const res=Array.from({length:end-start+1},(_,idx)=>idx+start);
    return res;
}


console.log(range1(1,50));
console.log(range1(30,60));

/*o/p:
[
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]
[
  30, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60
]
  */

/*
| Method         | Usage                                                           | Example                                        |
| -------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| `new Array()`  | Create array (but `new Array(5)` makes length=5 empty slots ⚠️) | `new Array(5)` → `[empty × 5]`                 |
| `Array.of()`   | Create array from given values (no confusion with length)       | `Array.of(5)` → `[5]`                          |
| `Array.from()` | Create from iterable / array-like + optional map function       | `Array.from({length:5},(_,i)=>i+1)` → `[1..5]` |

*/

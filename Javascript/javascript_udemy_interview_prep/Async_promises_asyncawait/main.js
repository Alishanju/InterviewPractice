//promises
const myPromise=new Promise((resolve,reject)=>{
    const success=true;
    if(success){
        resolve("Task completed Successfully")
    }else{
        reject("Task failed")
    }
});

myPromise.then((task)=>{
    console.log(task);
    return "Next task"
}).then(next=> console.log(next))
.catch(error => {
    console.log("error:")
    console.log(error)
})
.finally(()=>console.log("Promise settled(resolve/reject) sucessfully"))

/*o/p:
Task completed Successfully
Next task
Promise settled(resolve/reject) sucessfully
*/
/* in above if success=false then
o/P:
error:
Task failed
Promise settled(resolve/reject) sucessfully
*/

//async-await

const asyncFunc=async()=>{
    try{
        const task=await myPromise;
        console.log(task);
        const next="Next task"
        console.log(next);
    }catch(error){
        console.log("error:")
        console.log(error);
    }finally{
        console.log("Promise settled(resolve/reject) sucessfully")
    }
}
asyncFunc();
/*o/p: same as above
Task completed Successfully
Next task
Promise settled(resolve/reject) sucessfully
*/
/* in above if success=false then
o/P:
error:
Task failed
Promise settled(resolve/reject) sucessfully
*/
//try/catch inside async function catches both rejected Promises and synchronous errors inside the block.

//promises methods

//Promise.all -> waits all promises to resolve,rejects immediately if any fails
const p1 = Promise.resolve(10);
 const p2 = Promise.resolve(20);
 Promise.all([p1, p2]).then(values => console.log(values)); //[10,20]

//  const p1 = Promise.resolve(10);
//  const p2 = Promise.reject(20);
//  Promise.all([p1, p2]).then(values => console.log(values)); //node:internal/process/promises:392
//   //    new UnhandledPromiseRejection(reason);.....


//Promise.allSettled ->waits for all promises to be settled 
const p3 = Promise.resolve(10);
 const p4 = Promise.reject("Failed");
 Promise.allSettled([p3, p4]).then(results => console.log(results)) 
 /* o/p:
 [
  { status: 'fulfilled', value: 10 },
  { status: 'rejected', reason: 'Failed' }
]
  */

// const p3 = Promise.resolve(10);
//  const p4 = Promise.resolve("Failed");
//  Promise.allSettled([p3, p4]).then(results => console.log(results))
// o/p:[
//   { status: 'fulfilled', value: 10 },
//   { status: 'fulfilled', value: 'Failed' }
// ]

//Promise.race() -> resolves or rejects as soon as one promise settles
 const p5 = new Promise(res => setTimeout(() => res("A"), 1000));
 const p6 = new Promise(res => setTimeout(() => res("B"), 500));
 Promise.race([p5, p6]).then(value => console.log(value)); //B

// Promise.any(iterable)- Resolves as soon as any promise fulfills. Rejects with AggregateError if all fail
const p7 = Promise.reject("X");
 const p8 = Promise.resolve("Y");
 Promise.any([p7, p8]).then(value => console.log(value)); //Y

//  const p7 = Promise.reject("X");
//  const p8 = Promise.reject("Y");
//  Promise.any([p7, p8]).then(value => console.log(value)); //[AggregateError: All promises were rejected] { [errors]: [ 'X', 'Y' ] }


// Create throttle function
// // Throttle means limiting how often a function executes — at most once every 'X' ms.

// const debounce=(func,delay)=>{
//     let timer;
//     return function(...args){
//         clearTimeout(timer); //clears previous scheduled function call
//         timer=setTimeout(()=>{ //// schedules a new call; if another call happens before 'delay', this will be cleared
//             func.apply(this,args); //// execute the original function with latest args once user pauses
//         },delay)
//     }
// }

const throttle=(func,delay)=>{
    let lastCall=0;

    return function(...args){
        now=Date.now(); 
        if(now-lastCall>=delay){
            lastCall=now;
            func.apply(this,args); //// func executes immediately, then again after every delay interval
        }
    }


}


const saveInput=(name)=>{
    console.log("saveInput:",name);
}

const processInput=throttle(saveInput,2000); // throttle ensures saveInput executes at most once every 2000ms (2s)
processInput("Alisha"); //executes as its immediately
setTimeout(()=>{
 processInput("Alisha");
},1000)// ignored, because only 1s passed (<2s delay)
setTimeout(()=>{
 processInput("Alisha");
},1500) // ignored, still <2s from last execution
setTimeout(()=>{
 processInput("Alisha");
},2200) // executes, because >2s passed since last execution

// ✅ Output:
// saveInput: Alisha   (immediate call)
// saveInput: Alisha   (after ~2200ms)

// Difference:
// Debouncing -> function executes once after X ms
// Throttling -> executes immediately, and then then at most once per X ms




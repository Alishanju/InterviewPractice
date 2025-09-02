// Create debounce function
// Debouncing means the function will be called only after a certain period of inactivity. 
// Which means every call is delayed, and only the LAST one (after the pause) executes.

const debounce=(func,delay)=>{
    let timer;
    return function(...args){
        clearTimeout(timer); //clears previous scheduled function call
        timer=setTimeout(()=>{ //// schedules a new call; if another call happens before 'delay', this will be cleared
            func.apply(this,args); //// execute the original function with latest args once user pauses
        },delay)
    }
}
const saveInput=(name)=>{
    console.log("saveInput:",name);
}

const processInput=debounce(saveInput,2000); /// waits 2000ms (2 seconds) after last call
processInput("Alisha");
processInput("Alisha");
processInput("Alisha");
processInput("Alisha");
//o/p: logs Alisha once on screen 
//function executes once after X ms -> debouncing



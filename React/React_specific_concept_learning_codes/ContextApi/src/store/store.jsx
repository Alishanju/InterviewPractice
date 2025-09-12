import { createContext,useState } from "react";

export const AppContext=createContext(); //create context

export const AppContextProvider=({children})=>{
    const [count,setCount]=useState(0);
    const [theme,setTheme]=useState("light");

    const themes={
        light:{
            backgroundColor:"white",
            color:"black",
            borderRadius:"10px",
            border:"1px solid black",

        },
        dark:{
            backgroundColor:"black",
            color:"white",
            borderRadius:"10px",
            border:"1px solid white",

        },

    }

    const toggleTheme=()=>{
        setTheme(prev => prev ==="light"?"dark":"light");
    }

   return ( <AppContext.Provider value={{count,setCount,theme,toggleTheme,styles:themes[theme]}}>
        {children}
    </AppContext.Provider>)
}

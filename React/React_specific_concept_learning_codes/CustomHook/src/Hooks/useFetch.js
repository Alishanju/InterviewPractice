import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
    const [data,setData]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        async function fetchUsers(){
            try{
            let fetchedData=await fetch(url);
            if (!fetchedData.ok) {
          //throw new Error(`Invalid URL/HTTP error! Status: ${fetchedData.status}`);
          throw new Error("Invalid url,Please Check your url");
        }
         fetchedData=await fetchedData.json();
         setData(fetchedData);
            }catch(error){
                setError(error.message);
                console.log(error.message);

            }finally{
                setLoading(false);
            }
        }
            
            fetchUsers();

    },[url]);
    return {data,error,loading}
  
}

export default useFetch

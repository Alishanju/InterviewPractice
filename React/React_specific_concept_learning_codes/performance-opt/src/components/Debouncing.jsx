 import React, { useState,useEffect, useMemo,Profiler } from 'react';


const Debouncing = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const fetchUsers = async (text) => {
    if (!text) {
      setResult([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Unable to fetch data, please try again later");

      const data = await res.json();
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setResult(filtered);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  // ✅ Debounce inside useEffect
  useEffect(() => {
    if (!inputText.trim()) {
      setResult([]);
      setHasSearched(false);
      return;
    }

    const timer = setTimeout(() => {
      fetchUsers(inputText);
    }, 2000); // debounce delay

    return () => clearTimeout(timer); // cleanup old timers
  }, [inputText]);

  function onRenderCallback(id, phase, actualDuration) {
  console.log(`${id} took ${actualDuration}ms`);
  console.log('id phase:',phase);
}

  return (
    <Profiler id="debounce" onRender={onRenderCallback}>
    <div style={{ padding: "20px" }}>

      <h2>Debounced User Search (No useMemo)</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Search users..."
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {result.length > 0 &&
          result.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      {!loading && !error && hasSearched && result.length === 0 && (
        <p>No results found</p>
      )}
    </div>
    </Profiler>
  );
};

export default Debouncing;




// const Debouncing = () => {
//     const [inputText,setInputText]=useState("");
//     const [result,setResult]=useState([]);
//     const [loading,setLoading]=useState(false);
//     const [error,setError]=useState("");
//     const [searched,setHasSearched]=useState(false);


      
//     function Debouncingfn(func,delay){
//         console.log("in debouncing")
//         let timer;
//         return function(...args){
//             clearTimeout(timer);
//             timer=setTimeout(()=>{
//                 func(...args);

//             },delay)
//         }
//     }


//     const fetchUsers=async(text)=>{
       
//    if(!text){
//             setResult([]);
//             return;
//         }
//         try{
//             setLoading(true);
//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             if(!res.ok) throw new Error("unable to fetch data,please try again later");
//             const data=await res.json();
//             const filtered=data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
//             setResult(filtered);

//         }catch(err){
//             setError(err.message);

//         }finally{
//             setLoading(false);
//             setHasSearched(true);
            
//         }
//     }

//      const  fetchDebouncedUsers=useMemo(()=>Debouncingfn(fetchUsers,500),[])  ; 

//         useEffect(()=>{
//         fetchDebouncedUsers(inputText)
//     },[inputText,fetchDebouncedUsers]);


//   return (
//     <div>
//       <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//          <ul>
//         {result.length > 0 && 
//           result.map((user) => <li key={user.id}>{user.name}</li>)}
//       </ul>
//       {!loading&& !error && searched && result.length===0 && inputText && <p>No results found</p>}

      
      
//     </div>
//   )
// }

// export default Debouncing


// // import React,{useState} from 'react';
// // import _ from "lodash";

// // const Debouncing = () => {
// //     const [inpText,setInpText]=useState("");

// //     const handleChange=_.debounce((value)=>{
// //         console.log("api call made with:",value);

// //     },2000);
// //   return (
// //     <div>
// //         <input value={inpText} onChange={(e)=>{setInpText(e.target.value);handleChange(e.target.value)}}/>
      
// //     </div>
// //   )
// // }

// // export default Debouncing

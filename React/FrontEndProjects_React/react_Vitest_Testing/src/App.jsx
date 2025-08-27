import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(/*{name="Alisha"}) */){
  const [count, setCount] = useState(0);
  const [data,setData]=useState("");

  const fetchUser=async()=>{
    const user=await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData=await user.json();
    setData(userData);

  }

  return (
    <>
      <div>
        
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
        {data &&<h1>{data.name}</h1>}
        <button onClick={fetchUser}>Fetch user</button>

      </div>
    </>
  )
}

export default App

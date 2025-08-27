import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './Hooks/useFetch'

function App() {
  //const url="https://jsonplaceholder.typicode.com/userss"
  const url="https://jsonplaceholder.typicode.com/users"
 const {data,error,loading}=useFetch(url);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>{data &&  <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul> }</>
  );
}

export default App

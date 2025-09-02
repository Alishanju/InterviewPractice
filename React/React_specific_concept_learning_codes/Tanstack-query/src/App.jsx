import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList'

function App() {
  

  return (
    <>
    <h2 className='title'>My Posts</h2>
      <PostList/>
    </>
  )
}

export default App

import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './components/Memo'
import HookUseCallback from './components/HookUseCallback'
import HookUseMemo from './components/HookUseMemo'
import LazyLoad from './components/LazyLoad'
import MyVirtualizedList from './components/MyVirtualizedList'
import Debouncing from './components/Debouncing'
import ProfilerReact from './components/ProfilerReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Memo />*/}
      {/* <HookUseCallback /> */}
      {/* <HookUseMemo/> */}
      {/* <LazyLoad/> */}
      {/* <MyVirtualizedList/> */}
       <Debouncing /> 
     <ProfilerReact/>
    </>
  )
}

export default App

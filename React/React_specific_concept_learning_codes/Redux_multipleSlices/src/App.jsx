
import { lazy, Suspense } from 'react';
import './App.css';
const CounterSection=lazy(()=>import('./components/CounterSection'));
const AuthSection=lazy(()=>import('./components/AuthSection'));
const UsersSection=lazy(()=>import('./components/UsersSection'));



function App() {
 

  return (
    <div>
      <Suspense fallback={<p>Loading Counter...</p>}>
      <CounterSection />
      </Suspense>
       <Suspense fallback={<p>Loading Auth...</p>}>
      <AuthSection/>
      </Suspense>
       <Suspense fallback={<p>Loading Users...</p>}>
      <UsersSection/>
      </Suspense>
      
    </div>
  )
}

export default App

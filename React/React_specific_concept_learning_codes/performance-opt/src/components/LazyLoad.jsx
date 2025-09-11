import React from 'react'
import { lazy,Suspense } from 'react'
  const LazyComponent=lazy(()=>import("./HeavyComponent"));//Load components only when needed.

const LazyLoad = () => {
  

  return (
    <div>
      <h1>Main Application Content</h1>
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<div>Loading Lazy Component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default LazyLoad

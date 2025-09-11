import React from 'react'
import { Profiler } from 'react'
function onRenderCallback(id, phase, actualDuration) {
  console.log(`${id} took ${actualDuration}ms`);
  console.log('id phase:',phase);
}

const ProfilerReact = () => {
  return (
   
      <Profiler id="profilerReact" onRender={onRenderCallback}>
        <h1>Hello world!</h1>
      </Profiler>
   
  )
}

export default ProfilerReact

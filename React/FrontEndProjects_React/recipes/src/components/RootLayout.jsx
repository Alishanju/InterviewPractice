import React from 'react'
import { Outlet } from 'react-router-dom';
    /* can include nav bar too */

const RootLayout = () => {

  return (
    <div>
     <Outlet />
    </div>
  )
}

export default RootLayout

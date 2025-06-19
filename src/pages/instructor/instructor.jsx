import React from 'react'
import { Outlet } from 'react-router-dom'

function instructor() {
  return (
    <div>
        <h1>Instructor page</h1>
        <div>
            {<Outlet />}
        </div>
    </div>
  )
}

export default instructor
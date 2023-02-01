import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components'
import './mainlayout.scss'
const MainLayout = () => {
  return (
    <div className='main-layout'>
<Header/>
<div>
    <Outlet/>
</div>
    </div>
  )
}

export default MainLayout
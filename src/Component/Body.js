import React from 'react'
// import MainContainer from './MainContainer'
import SideBar from './SideBar'
import "./CSSALL/Body.css"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='body_wrapper'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body;

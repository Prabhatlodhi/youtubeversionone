import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import "./CSSALL/MainContainer.css"

const MainContainer = () => {
  return (
    <div  className='MainContainer'> 
      <ButtonList className="btnlist" />
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;

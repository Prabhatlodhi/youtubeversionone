import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Youtubelogo from "../Images/YouTube_Logo_2017.svg.webp";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import userImage from "../Images/userImage.jpg"
import "./CSSALL/Header.css"
import { useDispatch } from 'react-redux';
import { toggleMenu } from './Redux/appSlice';

const Header = () => {

const dispatch = useDispatch()

const toggleMenuHandler = ()=>{
  dispatch(toggleMenu())
}

  return (
    <div className='header_wrapper'>
      <ul className='first customli'>
        <li className='hamburgerIcon' ><MenuIcon onClick={()=> toggleMenuHandler()}/></li>
        <li className='imagelogo'> <img src={Youtubelogo} alt="" /></li>
      </ul>
      <ul className='customli'>
        <li><input type="text"  placeholder='Search' /></li>
        <li className='searchIcon'> <SearchIcon/> </li>
        <li className='voiceIcon' > <KeyboardVoiceIcon/> </li>
      </ul>
      <ul className='lastThree customli'>
        <li> <VideoCallIcon/> </li>
        <li> <NotificationsNoneIcon/> </li>
        <li className='userImage'> <img src={userImage} alt="" /> </li>
      </ul>
    </div>
  )
}

export default Header;

 
import { useSelector } from 'react-redux'
import "./CSSALL/SideBar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import WifiChannelOutlinedIcon from '@mui/icons-material/WifiChannelOutlined';
import { Link } from 'react-router-dom';

const SideBar = () => {

const isMenuOpen = useSelector(store => store.app.isMenuOpen)

if(!isMenuOpen) return null;



  return (
    <div className='allSideBar'>
     <ul>
     <Link to="/"> <li> <HomeOutlinedIcon/> <span>Home</span></li></Link>
      <li> <DuoOutlinedIcon/> <span>Shorts</span></li>
      <li> <SubscriptionsOutlinedIcon/> <span>Subscription</span></li>
     </ul>
     <hr />
     <ul>
      <li> <VideoLibraryOutlinedIcon/> <span>Library</span></li>
      <li> <HistoryOutlinedIcon/> <span>History</span></li>
      <li> <SmartDisplayOutlinedIcon/> <span>Your Video</span></li>
      <li> <ThumbUpOutlinedIcon/> <span>Liked Video</span></li> 
     </ul>
     
     <hr />
     <ul><span><b>Subscription</b></span>
      <li> <WifiChannelOutlinedIcon/> <span>NDTV India</span></li>
      <li><WifiChannelOutlinedIcon/><span>Nat Geo</span></li>
      <li><WifiChannelOutlinedIcon/><span>Fav Channnel</span></li>
      <li><WifiChannelOutlinedIcon/><span>Mr. Beast</span></li> 
     </ul>
    </div>
  )
}

export default SideBar

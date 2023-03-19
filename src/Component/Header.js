import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Youtubelogo from "../Images/YouTube_Logo_2017.svg.webp";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import userImage from "../Images/userImage.jpg";
import "./CSSALL/Header.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./Redux/appSlice";
import { YOU_TUBE_API } from "./Utils/Constant";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");

  
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOU_TUBE_API + searchQuery);
    const json = await data.json();
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header_wrapper">
      <ul className="first customli">
        <li className="hamburgerIcon">
          <MenuIcon onClick={() => toggleMenuHandler()} />
        </li>
        <li className="imagelogo">
          {" "}
          <img
            src={Youtubelogo}
            alt=""
            onChange={(e) => setsearchQuery(e.target.value)}
            value={searchQuery}
          />
        </li>
      </ul>
      <ul className="customli">
          <div>
        <li>
          <input type="text" placeholder="Search" />
         
        </li>
        <li className="searchIcon">
           
          <SearchIcon /> 
        </li>
        <li className="voiceIcon">
          {" "}
          <KeyboardVoiceIcon />{" "}
        </li>
        </div>
        <div className="searchresultd">
          <ul>
            <li><SearchIcon/>  I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
          </ul>
        </div>
      </ul>
      <ul className="lastThree customli">
        <li>
          {" "}
          <VideoCallIcon />{" "}
        </li>
        <li>
          {" "}
          <NotificationsNoneIcon />{" "}
        </li>
        <li className="userImage">
          {" "}
          <img src={userImage} alt="" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;

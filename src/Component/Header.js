import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Youtubelogo from "../Images/YouTube_Logo_2017.svg.webp";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import userImage from "../Images/userImage.jpg";
import "./CSSALL/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./Redux/appSlice"; 
import { SEARCH_BAR_API } from "./Utils/Constant";
import { cacheResults } from "./Redux/searchSlice";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestion, hideSuggestion] = useState(false);
  const searchCache = useSelector((store)=> store.search) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_BAR_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
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
          <img src={Youtubelogo} alt="" value={searchQuery} />
        </li>
      </ul>
      <ul className="customli">
        <div>
          <li>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setsearchQuery(e.target.value)}
              onFocus={() => hideSuggestion(true)}
              onBlur={() => hideSuggestion(false)}
            />
          </li>
          <li className="searchIcon">
            <SearchIcon />
          </li>
          <li className="voiceIcon">
            {" "}
            <KeyboardVoiceIcon />{" "}
          </li>
        </div>
        {showsuggestion && (
          <div className="searchresultd">
            <ul>
              {suggestions.map((s) => (
                <li key={s}>
                  <SearchIcon fontSize="verysmall" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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

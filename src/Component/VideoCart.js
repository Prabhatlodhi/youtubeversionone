import React from "react";
import "./CSSALL/VideoCart.css"

const VideoCart = ({ info }) => {
  // const { snippet, statistics} = info;
  // const { channelTitle, title, thumbnails} = snippet;statistics.viewCount
 

  if(!info){
    return null;
  }
  return (
    <div className="videoCard">
      <img src={info?.snippet?.thumbnails?.medium?.url} alt="" className="imageofthumbnail"/>
      <p></p>
      <ul>
        <li className="channelTitle"><b>{info?.snippet?.title}</b></li>
        <li> {info?.snippet?.channelTitle}</li>
        {/* <li>{info?.snippet?.channelTitle}</li> */}
        <li>{info?.statistics?.viewCount?.toLocaleString("en-US")}</li>
      </ul>
    </div>
  );
};

export default VideoCart;

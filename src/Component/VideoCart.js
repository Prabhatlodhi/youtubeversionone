import React from "react";
import "./CSSALL/VideoCart.css";

const VideoCart = ({ info }) => {
  // const { snippet, statistics} = info;
  // const { channelTitle, title, thumbnails} = snippet;statistics.viewCount
console.log(info)
  if (!info) {
    return null;
  }
  return (
    <div className="videoCard">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt=""
        className="imageofthumbnail"
      />
      <p></p>
      <ul>
        <li className="channelTitle">
          <b>{info?.snippet?.title}</b>
        </li>
        <li className="chades">
          <img
            src={info?.snippet?.thumbnails?.default?.url}
            alt=""
            className="channelImage"
          />
          {info?.snippet?.channelTitle}
        </li>
        {/* <li>{info?.snippet?.channelTitle}</li> */}
        <li className="chades">
          {info?.statistics?.viewCount?.toLocaleString("en-US")}
        </li>
      </ul>
    </div>
  );
};

export default VideoCart;

export const AdVideoCard = ({ info }) => {
  return (
    <div className="adcard">
      <VideoCart info={info} />
    </div>
  );
};

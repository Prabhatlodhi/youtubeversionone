import React from "react";
import "./CSSALL/VideoCart.css";

const VideoCart = ({ info }) => {
  // const { snippet, statistics} = info;
  // const { channelTitle, title, thumbnails} = snippet;statistics.viewCount

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
      <ul>
        <li className="channelTitle">
          <b>{info?.snippet?.title}</b>
        </li>
</ul>
        <div className="sepration">
          <div>
            <img
              src={info?.snippet?.thumbnails?.default?.url}
              alt=""
              className="channelImage"
            />
          </div>
          <div>
            <p className="chades">{info?.snippet?.channelTitle}</p>
            <p className="chades">
              {(info?.statistics?.viewCount)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              views
            </p>
          </div>
        </div> 
      
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

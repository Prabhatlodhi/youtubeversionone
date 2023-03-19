import React, { useEffect, useState } from "react";
import "./CSSALL/VideoContainer.css";
import { YOU_TUBE_API } from "./Utils/Constant";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtubedatafetch();
  }, []);

  async function youtubedatafetch() {
    const data = await fetch(YOU_TUBE_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json.items)
  }

  return (
    <div className="videoContainer">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id}>
          <VideoCart info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

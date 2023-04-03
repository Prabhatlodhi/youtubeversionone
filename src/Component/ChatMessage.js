import React from "react";
import userImage from "../Images/userImage.jpg";
import "./CSSALL/Chatmessage.css";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="chatmessage">
      <div>
        <img src={userImage} alt={"user_image"} />
      </div>
      <div className="nametext">
        <span className="textname">
          <b>{name}: </b>
        </span>
        <span className="textmessage">{text}</span>
      </div>
    </div>
  );
};

export default ChatMessage;

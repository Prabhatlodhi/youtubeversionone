import React from "react";
import UserImage from "../Images/userImage.jpg";
import "./CSSALL/CommentsContainer.css";

const commentsData = [
  {
    name: "Prabhat Lodhi",
    text: "lorem this is a comment this time",
    reply: [
      {
        name: "Prabhat Lodhi",
        text: "lorem this is a comment this time",
        reply: [
          {
            name: "Prabhat Lodhi",
            text: "lorem this is a comment this time",
            reply: [
              {
                name: "Prabhat Lodhi",
                text: "lorem this is a comment this time",
                reply: [],
              },
            ],
          },
        ],
      },
      {
        name: "Prabhat Lodhi",
        text: "lorem this is a comment this time",
        reply: [
          {
            name: "Prabhat Lodhi",
            text: "lorem this is a comment this time",
            reply: [
              {
                name: "Prabhat Lodhi",
                text: "lorem this is a comment this time",
                reply: [],
              },
              {
                name: "Prabhat Lodhi",
                text: "lorem this is a comment this time",
                reply: [
                  {
                    name: "Prabhat Lodhi",
                    text: "lorem this is a comment this time",
                    reply: [],
                  },
                  {
                    name: "Prabhat Lodhi",
                    text: "lorem this is a comment this time",
                    reply: [],
                  },
                ],
              },
              {
                name: "Prabhat Lodhi",
                text: "lorem this is a comment this time",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Prabhat Lodhi",
    text: "lorem this is a comment this time",
    reply: [],
  },
  {
    name: "Prabhat Lodhi",
    text: "lorem this is a comment this time",
    reply: [
      {
        name: "Prabhat Lodhi",
        text: "lorem this is a comment this time",
        reply: [
          {
            name: "Prabhat Lodhi",
            text: "lorem this is a comment this time",
            reply: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="commentImage">
      <img src={UserImage} alt="" />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="padd">
        <CommentsList comments={comment.reply}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1>CommentsContainer</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

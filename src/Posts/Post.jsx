import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Posts.module.css";
import Ellipse from "./Ellipse.png";
import Vector from "./Vector.png";
// import CommentsList from "../Comments/CommentsList";

const PostsList = (props) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.userinfo);

  const SeeComments = async (id, body) => {
    navigate(`./Comments/?postID=${id}`, { state: { body } });
  };

  const postComment = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value.trim().length !== 0 &&
      event.target.value !== null
    ) {
      // console.log(event.target.value);
      let commentContent = document.getElementById(event.target.value);
      const newDiv = document.createElement("div");
      newDiv.className = "addedCOMMENT";
      newDiv.innerHTML = `
        <p class = "addedCOMMENT">${commentContent}</p>
         `;
      const reference = event.target.parentNode;
      // console.log(event.target.parentNode);
      reference.insertAdjacentElement("beforeBegin", newDiv);
      event.target.value = " ";
    }
  };

  return (
    <Fragment>
      <div className={classes.posts_div}>
        <div className={classes.userINFO}>
          <img src={Ellipse} alt="img" />
          <div className={classes.userNAMES}>
            <h3 className={classes.name}>{user.name}</h3>
            <h5 className={classes.username}>@{user.username}</h5>
          </div>
        </div>
        <p
          className={classes.post}
          onClick={() => SeeComments(props.data.id, props.data.body)}
        >
          {props.data.body}
        </p>
        <hr id="hr1" className={classes.hr1} />
        <div className={classes.viewallCOMMENTS}>See Comments</div>
        <div className={`${classes["comment-holder"]}`}>
          <img src={Vector} alt="img" />
          <input
            id="comment"
            className={classes.comment}
            type="text"
            placeholder="Add comment..."
            onKeyDown={postComment}
          />
        </div>
        <hr className={classes.hr2} />
      </div>
    </Fragment>
  );
};

export default PostsList;

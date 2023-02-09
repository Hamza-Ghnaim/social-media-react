import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Posts.module.css";
import Ellipse from "./Ellipse.png";
import NewComment from "../Comments/NewComment";
// import CommentsList from "../Comments/CommentsList";

const PostsList = (props) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.userinfo);

  const SeeComments = async (id, body) => {
    navigate(`./Comments/?postID=${id}`, { state: { body } });
  };

  // const postComment = (event) => {};

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
        <NewComment />
        <hr className={classes.hr2} />
      </div>
    </Fragment>
  );
};

export default PostsList;

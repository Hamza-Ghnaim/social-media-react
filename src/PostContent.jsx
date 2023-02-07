import React, { Fragment } from "react";
import classes from "./Posts.module.css";
import { useNavigate } from "react-router-dom";
import Ellipse from "./Ellipse.png";
import Vector from "./Vector.png";

const PostContent = (props) => {
  const user = JSON.parse(localStorage.userinfo);

  const seeComments = (content) => {
    console.log(content);
    // const navigate = useNavigate();
    // navigate("./Comments");
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
          id={props.content.id}
          onClick={() => seeComments(props.key)}
        >
          {props.content.body}
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
          />
        </div>
        <hr className={classes.hr2} />
      </div>
    </Fragment>
  );
};

export default PostContent;

{
  /* 
  
 
; */
}

{
  /* <Fragment>
<p>{user.username}</p>
<h2>{props.content.body}</h2>
</Fragment> */
}

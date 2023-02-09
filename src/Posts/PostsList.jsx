import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Posts.module.css";
import Ellipse from "./Ellipse.png";
import Vector from "./Vector.png";

const PostsList = (props) => {
  // console.log(props.posts;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.userinfo);
  const SeeComments = async (id, body) => {
    navigate(`./Comments/?postID=${id}`, { state: { body } });
  };

  return (
    <Fragment>
      {props.posts &&
        props.posts.map((post) => (
          <div key={post.id} className={classes.posts_div}>
            <div className={classes.userINFO}>
              <img src={Ellipse} alt="img" />
              <div className={classes.userNAMES}>
                <h3 className={classes.name}>{user.name}</h3>
                <h5 className={classes.username}>@{user.username}</h5>
              </div>
            </div>
            <p
              className={classes.post}
              onClick={() => SeeComments(post.id, post.body)}
            >
              {post.body}
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
        ))}
    </Fragment>
  );
};

export default PostsList;

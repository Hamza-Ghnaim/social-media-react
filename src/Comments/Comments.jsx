import React, { Fragment, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Ellipse from "../Posts/Ellipse.png";
import Vector from "../Posts/Vector.png";
import classes from "./Comments.module.css";

const Comments = () => {
  const user = JSON.parse(localStorage.userinfo);
  const [Post,setpost] = useState("");
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const postID = +searchParams.get("postID");
  useEffect(() => {
    const Fetch = async () => {
      const response1 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}/`
      );
      const Response1 = await response1.json();
      setpost(Response1)
      const response2 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
      );
      const Response2 = await response2.json();
      setComments(Response2);
    };
    Fetch();
  });
  const post = Post.body
  return (
    <Fragment>
      <div className={classes.enclosing}>
        <div className={classes.container}>
          <h1 className={classes.title}>See Comments</h1>
          <p className={classes.paragraph}>
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        </div>
        <div id="posts_container"></div>
        <div className={classes.posts_div}>
          <div className={classes.userINFO}>
            <img src={Ellipse} alt="img" />
            <div className={classes.userNAMES}>
              <h3 className={classes.name} id="NAME">
                {user.name}
              </h3>
              <h5 className={classes.usernametop} id="USERNAME">
                {user.email}
              </h5>
            </div>
          </div>
          <p className={classes.post} id="post">
            {post}
          </p>
          <hr id="hr1" className={classes.hr1} />
          <div className={classes.viewallCOMMENTS}>See Comments</div>
          <div className={classes.Posts_comment_holder}>
            <img src={Vector} alt="img" />
            <input
              id="comment"
              className={classes.comment}
              type="text"
              placeholder="Add comment..."
            />
          </div>
          <hr className={classes.hr2} id="hr2" />
          <div id="breaker"></div>
        </div>
        {comments &&
          comments.map((comment) => (
            <div key={comment.id} className={classes.addedCOMMENTDIV}>
              <div className={classes.commenterINFO}>
                <img className={classes.photo} src={Ellipse} alt="img" />
                <div className={classes.commentorNAMES}>
                  <h3 className={classes.commenterName}>{comment.email}</h3>
                  <h5 className={classes.username}>{comment.body}</h5>
                </div>
              </div>
              <hr className={classes.hr2} />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Comments;

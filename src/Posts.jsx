import React, { Fragment, useState, useEffect } from "react";
import classes from "./Posts.module.css";
import Ellipse from "./Ellipse.png";
import Vector from "./Vector.png";

const Posts = () => {
  const user = JSON.parse(localStorage.userinfo);

  const [PostsArray, setPostsArray] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      const Response = await response.json();
      setPostsArray(Response);
    };
    Fetch();
  }, []);

  const seeComments = (x, y) => {
    console.log(x);
  };

  return (
    <Fragment>
      <div className={classes.enclosing}>
        <div className={classes.container}>
          <h1 className={classes.title}>Discover</h1>
          <p className={classes.paragraph}>
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        </div>
      </div>
      {PostsArray &&
        PostsArray.map((post) => (
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
              id={post.id}
              onClick={() => seeComments(post.id, post.body)}
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

export default Posts;

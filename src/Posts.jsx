import React, { Fragment, useState, useEffect } from "react";
import Discover from "./Discover";
import classes from "./Posts.module.css";
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
      <Discover posts={PostsArray} />
    </Fragment>
  );
};

export default Posts;

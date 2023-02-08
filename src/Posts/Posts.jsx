import React, { Fragment, useState, useEffect } from "react";
import PostsList from "./PostsList";
import classes from "./Posts.module.css";
import AddPost from "./AddPost";
import Button from "../UI/Button";

const Posts = () => {
  const user = JSON.parse(localStorage.userinfo);
  const [clicked, setclicked] = useState(false);
  const [PostsArray, setPostsArray] = useState([]);
  const addPOST = () => {
    setclicked(true);
  };
  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      const Response = await response.json();
      setPostsArray(Response);
    };
    Fetch();
  });

  return (
    <Fragment>
      {clicked && <AddPost />}
      <div className={classes.enclosing}>
        <div className={classes.container}>
          <h1 className={classes.title}>Discover</h1>
          <p className={classes.paragraph}>
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        </div>
      </div>
      <PostsList posts={PostsArray} />
      <Button onButton={addPOST} />
    </Fragment>
  );
};

export default Posts;

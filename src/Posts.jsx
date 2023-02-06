import React, { Fragment, useState, useEffect } from "react";
import Discover from "./Discover";
import Header from "./Header";
// import "./Posts.css";
const Posts = () => {
  const user = JSON.parse(localStorage.userinfo);
  //   console.log(user);
  const [PostsArray, setPostsArray] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      const Response = await response.json();
      setPostsArray(Response);
      //   console.log(PostsArray);
    };
    Fetch();
  }, []);

  return (
    <Fragment>
      <div className={"enclosing"}>
        <div className={"container"}>
          <h1 className={"title"}>Discover</h1>
          <Header />
        </div>
      </div>
      <Discover posts={PostsArray} />
    </Fragment>
  );
};

export default Posts;

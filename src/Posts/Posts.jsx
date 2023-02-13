import React, { Fragment, useState, useEffect } from "react";
import Post from "./Post";
import classes from "./Posts.module.css";
import AddPost from "./AddPost";
import Button from "../UI/Button";
const Posts = () => {
  const user = JSON.parse(localStorage.userinfo);
  const [postsNum,setpostsNum]=useState(5);
  const [clicked, setclicked] = useState(false);
  const [PostsArray, setPostsArray] = useState([]);
  // const [newPost, setnewPost] = useState("");
  const addPOST = () => {
    setclicked(!clicked);
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
  }, []);
  // const setPostContent = () => {
  //   console.log("from inside the posts component");
  // };
  const addMorePosts = ()=>{
    setpostsNum(postsNum+5)

  }

  const setPostContent = (newPostArray) => {
    setPostsArray([newPostArray, ...PostsArray]);
    // console.log(PostsArray);
  };

  return (
    <Fragment>
      {clicked && <AddPost onAddPost={setPostContent} onBTNCLICK={addPOST} />}
      <div className={classes.enclosing}>
        <div className={classes.container}>
          <h1 className={classes.title}>Discover</h1>
          <p className={classes.paragraph}>
            <strong>WHAT'S NEW TODAY</strong>
          </p>
          <h2 onClick={addMorePosts}>... Load more content ...</h2>
        <br />
        </div>
      </div>
      {PostsArray &&
        (PostsArray.slice(0,postsNum)).map((post) => (
          <Fragment key={post.id}>
            <Post posts={PostsArray} data={post} />
          </Fragment>
        ))}
      <Button onButton={addPOST} />
    </Fragment>
  );
};
export default Posts;

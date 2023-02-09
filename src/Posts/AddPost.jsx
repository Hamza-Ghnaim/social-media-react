import React, { Fragment, useState } from "react";
import classes from "../Posts/AddPost.module.css";

const AddPost = (props) => {
  const [content, setContent] = useState({
    UserID: null,
    id: null,
    title: "sthing",
    body: "",
  });
  const postContnet = (event) => {
    setContent({
      UserID: Date.now(),
      id: Date.now(),
      title: "sthing",
      body: event.target.value,
    });
  };
  const submitPost = () => {
    props.onAddPost(content);
    props.onBTNCLICK();
    // console.log(content);
  };
  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.createPost_container}>
          <div className={classes.createPost_content}>
            <textarea
              name="new-post"
              id="new-post"
              placeholder="insert your thoughts here...."
              onChange={postContnet}
            ></textarea>
            <div className={classes.buttons}>
              <button type="button" id="upload_post" onClick={submitPost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default AddPost;

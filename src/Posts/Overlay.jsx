import React, { useState } from "react";
import classes from "../Posts/AddPost.module.css";

const Overlay = (props) => {
  const [newPost, setnewPost] = useState("");
  const newPostContent = (event) => {
    setnewPost(event.target.value);
    console.log(newPost);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.createPost_container}>
        <div className={classes.createPost_content}>
          <textarea
            name="new-post"
            id="new-post"
            placeholder="insert your thoughts here...."
            onChange={newPostContent}
          ></textarea>
          <div className={classes.buttons}>
            <button type="button" id="upload_post">
              Post
            </button>
            <button type="button" id="cancel_post">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

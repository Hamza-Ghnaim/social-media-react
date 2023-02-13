import React, { Fragment } from "react";
import classes from "../Posts/Posts.module.css";
const Button = (props) => {
  const addNewPost = () => {
    props.onButton();
  };
  return (
    <>
      <div className={classes.create_post_btn_container}>
        <hr />
        <button
          className={classes.create_post_btn}
          type="button"
          onClick={addNewPost}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Button;

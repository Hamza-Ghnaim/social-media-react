import React, { Fragment } from "react";
import classes from "../Posts/Posts.module.css";
const Button = () => {
  return (
    <Fragment>
      <div className={classes.create_post_btn_container}>
        <hr />
        <button className={classes.create_post_btn} type="button">
          +
        </button>
      </div>
    </Fragment>
  );
};

export default Button;

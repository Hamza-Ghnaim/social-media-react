import React, { Fragment } from "react";
import Ellipse from "../Posts/Ellipse.png";
import classes from "./Comments.module.css";

const CommentsList = (props) => {
  return (
    <Fragment>
      <div className={classes.addedCOMMENT}>
        <div className={classes.userINFO}>
          <img className={classes.photo} src={Ellipse} alt="img" />
          <div className={classes.userNAMES}>
            <h3 className={classes.name}>$user.name</h3>
            <p className={classes.addedCOMMENT}>$content</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentsList;

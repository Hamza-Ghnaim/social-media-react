import React, { Fragment } from "react";
import Ellipse from "../Posts/Ellipse.png";
import classes from "./Comments.module.css";

const CommentsList = (props) => {
  const user = JSON.parse(localStorage.userinfo);
  return (
    <Fragment>
      {props.data.map((comment) => (
        <Fragment key={Math.random() + Date.now()}>
          <div className={classes.addedCOMMENT}>
            <div className={classes.userINFO}>
              <img className={classes.photo} src={Ellipse} alt="img" />
              <div className={classes.userNAMES}>
                <h3 className={classes.name}>{user.name}</h3>
                <p className={classes.addedCOMMENT}>{comment.body}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default CommentsList;

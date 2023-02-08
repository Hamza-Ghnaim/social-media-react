import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../Posts/AddPost.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return <textarea>Express your thoughts here...</textarea>;
};

const AddPost = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
};

export default AddPost;

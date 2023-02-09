import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

const AddPost = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay newPost={props.newPost} onNewPost={props.onNewPost} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddPost;

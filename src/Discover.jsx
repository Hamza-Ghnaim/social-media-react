import React, { Fragment } from "react";
import PostContent from "./PostContent";

const Discover = (props) => {
  // console.log(props);
  console.log(props.posts);
  return (
    <Fragment>
      {props.posts.map((post) => (
        <PostContent content={post} key={post.id} />
      ))}
    </Fragment>
  );
};

export default Discover;

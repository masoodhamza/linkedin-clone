import { Avatar } from "@mui/material";
import React from "react";

const FeedPosts = ({ post }) => {
  return (
    <div className="feedPostContaner">
      <div className="feedPostHeader">
        {/* {!post.avatar && <Avatar />} */}
        {post.avatar ? <Avatar src={post.avatar} /> : <Avatar />}
        <div className="feedPostHeading">
          <h4>{post.name}</h4>
          <p>{post.description}</p>
        </div>
      </div>
      <p>{post.message}</p>
      {/* <p>created at {post.publishedAt}</p> */}
    </div>
  );
};

export default FeedPosts;

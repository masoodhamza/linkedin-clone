import { Avatar } from "@mui/material";
import React from "react";
import FeedsInputOptions from "./FeedsInputOptions";

// icons
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const FeedPosts = ({ post }) => {
  return (
    <div className="feedPostContainer">
      <div className="feedPostHeader">
        {/* {!post.avatar && <Avatar />} */}
        {post.avatar ? <Avatar src={post.avatar} /> : <Avatar />}
        <div className="feedPostHeading">
          <h5>{post.name}</h5>
          <p>{post.description}</p>
        </div>
      </div>
      <p>{post.message}</p>
      <div className="InputOptionsContainer">
        <FeedsInputOptions title="Like" Icon={ThumbUpAltIcon} color="#a9a9a9" />
        <FeedsInputOptions title="Comment" Icon={CommentIcon} color="#a9a9a9" />
        <FeedsInputOptions title="Share" Icon={ShareIcon} color="#a9a9a9" />
        <FeedsInputOptions title="Send" Icon={SendIcon} color="#a9a9a9" />
      </div>
    </div>
  );
};

export default FeedPosts;

import { Avatar } from "@mui/material";
import React, { useState } from "react";

import FeedsInputOptions from "./FeedsInputOptions";
import { db } from "../server/firestore";
import firebase from "firebase/compat/app";

// icons
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from "@mui/icons-material/Assignment";

const FeedsInput = () => {
  const [EnteredPost, setEnteredPost] = useState("");

  const CreatePostHandler = (e) => {
    e.preventDefault();

    // adding post to firestore db
    db.collection("posts")
      .add({
        avatar: "",
        description: "Full Stack Developer at DevNation",
        message: EnteredPost,
        name: "Hamza Masood",
        publishedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      // .then(() => alert("Post added successfully."))
      .catch(() => alert("Oops! Something went wrong."));

    // clear input field
    setEnteredPost("");
  };

  return (
    <div className="feedsInput-container">
      <div className="feedsInput-writePost">
        <Avatar />
        <div className="feedsInput-textContainer">
          <form onSubmit={CreatePostHandler}>
            <input
              type="text"
              className="textInput"
              placeholder="Start a post"
              value={EnteredPost}
              onChange={(e) => setEnteredPost(e.target.value)}
            />
            {/* <input
              type="submit"
              onClick={CreatePostHandler}
              style={{ display: "none" }}
            /> */}
          </form>
        </div>
      </div>
      <div className="InputOptionsContainer">
        <FeedsInputOptions title="Photo" Icon={PhotoIcon} color="#70B5F9" />
        <FeedsInputOptions title="Video" Icon={YouTubeIcon} color="#7fc15e" />
        <FeedsInputOptions
          title="Event"
          Icon={EventAvailableIcon}
          color="#e7a33e"
        />
        <FeedsInputOptions
          title="Write Article"
          Icon={AssignmentIcon}
          color="#fc9295"
        />
      </div>
    </div>
  );
};

export default FeedsInput;

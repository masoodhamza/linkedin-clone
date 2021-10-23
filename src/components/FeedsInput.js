import { Avatar } from "@mui/material";
import React from "react";

import FeedsInputOptions from "./FeedsInputOptions";

// icons
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from "@mui/icons-material/Assignment";

const FeedsInput = () => {
  return (
    <div className="feedsInput-container">
      <div className="feedsInput-writePost">
        <Avatar />
        <div className="feedsInput-textContainer">
          <form>
            <input
              type="text"
              className="textInput"
              placeholder="Start a post"
            />
            <input type="submit" style={{ display: "none" }} />
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

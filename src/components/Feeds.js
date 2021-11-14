import React, { useEffect, useState } from "react";
import FeedsInput from "./FeedsInput";
import "../assets/styles/Feeds.css";
import FeedPosts from "./FeedPosts";
import { db } from "../firebase";
import FlipMove from "react-flip-move";

const Feeds = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("publishedAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            description: doc.data().description,
            message: doc.data().message,
            name: doc.data().name,
            // publishedAt: doc.data().publishedAt.seconds, //timestamp will return seconds, miliseconds
          }))
        );
      });
  }, []);

  return (
    <div className="feedsContainer">
      <FeedsInput />
      <FlipMove>
        {Posts && Posts.map((post) => <FeedPosts key={post.id} post={post} />)}
      </FlipMove>
    </div>
  );
};

export default Feeds;

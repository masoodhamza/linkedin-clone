import React, { useEffect, useState } from "react";
import FeedsInput from "./FeedsInput";
import "../assets/styles/Feeds.css";
import FeedPosts from "./FeedPosts";
import { db } from "../firebase";

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
          }))
        );
      });
  }, []);

  return (
    <div className="feedsContainer">
      <FeedsInput />
      {Posts && Posts.map((post) => <FeedPosts key={post.id} post={post} />)}
    </div>
  );
};

export default Feeds;

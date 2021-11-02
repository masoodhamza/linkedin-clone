import React, { useEffect, useState } from "react";
import FeedsInput from "./FeedsInput";
import "../assets/styles/Feeds.css";
import FeedPosts from "./FeedPosts";
import { db } from "../server/firestore";

const Feeds = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          avatar: doc.data().avatar,
          description: doc.data().description,
          message: doc.data().message,
          name: doc.data().name,
          // publishedAt: doc.data().publishedAt,
        }))
      )
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(Posts);
  }, [Posts]);

  return (
    <div className="feedsContainer">
      <FeedsInput />
      {Posts && Posts.map((post) => <FeedPosts post={post} />)}
    </div>
  );
};

export default Feeds;

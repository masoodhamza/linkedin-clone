import React, { useEffect, useState } from "react";
import FeedsInput from "./FeedsInput";
import "../assets/styles/Feeds.css";
import FeedPosts from "./FeedPosts";
import { db } from "../server/firestore";

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

    // db.collection("posts")
    //   .get()
    //   .then((result) => result.docs)
    //   .then((docs) =>
    //     docs.map((doc) => ({
    //       avatar: doc.data().avatar,
    //       description: doc.data().description,
    //       message: doc.data().message,
    //       name: doc.data().name,
    //     }))
    //   )
    //   .then((posts) => setPosts(posts))
    //   .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(Posts);
  }, [Posts]);

  return (
    <div className="feedsContainer">
      <FeedsInput />
      {Posts && Posts.map((post) => <FeedPosts key={post.id} post={post} />)}
    </div>
  );
};

export default Feeds;

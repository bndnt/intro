import React, { useEffect, useState } from "react";
import axios from "axios";

const AppWithHTTPS = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("https://dummyjson.com/posts");
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {Array.isArray(posts) && posts.length === 0 && (
        <p>За вашим запитом нічого не знайдено</p>
      )}
      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <article key={post.id}>
              <h5>{post.title}</h5>
            </article>
          );
        })}
    </div>
  );
};

export default AppWithHTTPS;

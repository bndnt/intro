import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { RequestAllPosts, RequestPostsBySearchValue } from "../../services/api";
import SearchPost from "./SearchPost/SearchPost";

const AppWithHTTPS = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await RequestAllPosts();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    if (searchValue === null) return;
    const fetchPostsBySearchValue = async () => {
      try {
        setLoading(true);
        const data = await RequestPostsBySearchValue(searchValue);
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPostsBySearchValue();
  }, [searchValue]);
  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  return (
    <div>
      <SearchPost onSearch={onSearch} />
      {loading && <Loader />}
      {Array.isArray(posts) && posts.length === 0 && (
        <p>За вашим запитом "{searchValue}"" нічого не знайдено</p>
      )}
      {error !== null && <p>{error}. Try adain later.</p>}
      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <article key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <p>{JSON.stringify(post.reactions)}</p>
              <p>Tags: {post.tags.join(", ")}</p>
            </article>
          );
        })}
    </div>
  );
};

export default AppWithHTTPS;

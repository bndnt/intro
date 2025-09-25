import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { RequestAllPosts, RequestPostsBySearchValue } from "../services/api";
import SearchPost from "../components/FourthModule/SearchPost/SearchPost";
import { Link, useSearchParams } from "react-router-dom";
const FMPosts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    // if (searchValue === null) return;
    // if (!query) return;
    const fetchPostsBySearchValue = async () => {
      try {
        setLoading(true);
        if (query) {
          const data = await RequestPostsBySearchValue(query);
          setPosts(data.posts);
        } else {
          const data = await RequestAllPosts();
          setPosts(data.posts);
        }
        // const data = await RequestPostsBySearchValue(searchValue);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPostsBySearchValue();
  }, [query]);
  const onSearch = (searchTerm) => {
    // setSearchValue(searchTerm);
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <SearchPost onSearch={onSearch} />
      {loading && <Loader />}
      {Array.isArray(posts) && posts.length === 0 && (
        <p>За вашим запитом "{query}"" нічого не знайдено</p>
      )}
      {error !== null && <p>{error}. Try adain later.</p>}
      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <p>{JSON.stringify(post.reactions)}</p>
              <p>Tags: {post.tags.join(", ")}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default FMPosts;

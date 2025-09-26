import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { requestSinglePostData } from "../services/api";
import Loader from "../components/Loader/Loader";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/posts");

  // console.log("location details page: ", location);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setLoading(true);
        const data = await requestSinglePostData(postId);
        setPostDetails(data);
        // console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPostDetails();
  }, [postId]);
  return (
    <div>
      <Link to={backLinkRef.current}>← Go back</Link>
      {loading && <Loader />}
      {postDetails !== null && (
        <div>
          <h3>{postDetails.title}</h3>
          <p>{postDetails.body}</p>
          <ul>
            {postDetails.tags.map((item) => (
              <li>#{item}</li>
            ))}
          </ul>

          <div>
            <NavLink to="comments">Comments</NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      )}
      {error !== null && <p>{error}. Try adain later.</p>}

      <p>Details of article ID: {postId}</p>
    </div>
  );
};

export default PostDetailsPage;

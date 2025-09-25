import React from "react";
import { useParams } from "react-router-dom";

const PostComments = () => {
  const postId = useParams();
  console.log(postId);

  return (
    <div>
      <ul>
        <span>Reactions to post </span>
        <li>
          <span>👍</span>
          {/* {postDetails.reactions.likes} */}
        </li>
        <li>
          <span>👎</span>
          {/* {postDetails.reactions.dislikes} */}
        </li>
      </ul>
    </div>
  );
};

export default PostComments;

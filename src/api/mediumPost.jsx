import React, { useState, useEffect } from "react";
import axios from "axios";

function MediumPost(props) {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const mediumUrl = `https://api.medium.com/v1/posts/${props.postId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${props.apiKey}`,
      },
    };

    axios
      .get(mediumUrl, config)
      .then((response) => {
        setPostContent(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching Medium post:", error);
      });
  }, [props.postId, props.apiKey]);

  return (
    <div
      className="medium-post"
      dangerouslySetInnerHTML={{ __html: postContent }}
    ></div>
  );
}

export default MediumPost;

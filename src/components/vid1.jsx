import React from "react";

function VideoPlayer() {
  return (
    <video width="640" height="360" controls>
      <source
        src="https://drive.google.com/file/d/1Y9jXlnoqNuMNTkY4hikPraput2nQenFO/view?usp=share_link"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;

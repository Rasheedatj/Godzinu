import React, { useRef } from "react";
import PropTypes from "prop-types";

function VideoPlayer({ embedId }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div className=" border-[1px] video-responsive" width="640" height="360">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
VideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default VideoPlayer;

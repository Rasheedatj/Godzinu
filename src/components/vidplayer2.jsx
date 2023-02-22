import React, { useRef } from "react";

import PropTypes from "prop-types";

function VideoPlayer2({ embedId }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div className=" border-[2px] video-responsive" width="640" height="360">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block play-icon absolute left-[50%] translate-x-[-50%] top-[5%] translate-y-[50%] z-[100]"
        onClick={handlePlay}
      >
        <path
          d="M47.0491 40.0752L67.8233 53.9247L47.0491 67.7741V40.0752Z"
          stroke="#00F0FF"
          strokeWidth="6.92473"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.9736 102.397C80.7446 102.397 102.447 80.6953 102.447 53.9243C102.447 27.1533 80.7446 5.45117 53.9736 5.45117C27.2026 5.45117 5.50049 27.1533 5.50049 53.9243C5.50049 80.6953 27.2026 102.397 53.9736 102.397Z"
          stroke="#00F0FF"
          strokeWidth="9.69463"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
VideoPlayer2.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default VideoPlayer2;

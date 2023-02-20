import React, { useRef } from "react";
import { Icons } from "../assets"

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className=" rounded-[50%]" width="640" height="360">
      <video
        width="640"
        height="360"
        className="rounded-[20px] relative border-[1px]"
        controls
        ref={videoRef}
      >
        <source src={Icons.aboutVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block play-icon absolute left-[50%] translate-x-[-50%] top-[5%] translate-y-[50%]"
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
      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="play-icon absolute left-[50%] translate-x-[-50%] top-[5%] translate-y-[50%] hidden md:block"
        onClick={handlePause}
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

export default VideoPlayer;

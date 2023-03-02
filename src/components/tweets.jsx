import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const TwitterTimeline = ({ offset }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-[5rem] lg:px-[10rem] mb-[10rem">
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <h1 className="text-[white] text-[25px] pb-[3rem] md:text-[35px] lg:text-[50px]  font-[500] text-center capitalize gradient">
          tweets by GODZinu
        </h1>
        <a
          className="twitter-timeline"
          data-height="600"
          data-theme="dark"
          href="https://twitter.com/GODZinu_io?s=20"
        >
          Tweets by Medium
        </a>
      </ScrollAnimation>
    </div>
  );
};

export default TwitterTimeline;

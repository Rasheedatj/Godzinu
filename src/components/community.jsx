import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";
import { Icons } from "../assets";

const Community = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideInVariantAnimation}
      id="community"
    >
      <h1 className="text-[white] text-[35px] text-center lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem] mb-[4rem]">
        join our community of <span className="gradient">godzinu hunters</span>
      </h1>
      <section className="flex flex-col gap-[4rem] lg:gap-[0] md:flex-row items-center">
        <img
          src={Icons.hunters}
          alt=""
          className="w-[100%] md:w-[50%] gap-[5rem]"
        />
        <div className="flex flex-wrap justify-center w-[100%] lg:w-[50%] lg:ml-[5rem]">
          <a href="#" className="w-[50%]">
            <img src={Icons.comreddit} alt="" className="w-[50%]" />
          </a>
          <a href="https://twitter.com/GODZinu_io" className="w-[50%]">
            <img src={Icons.comtwitter} alt="" className="w-[50%]" />
          </a>
          <a
            href="https://medium.com/@GODZinu_io"
            className="w-[50%] mt-[5rem]"
          >
            <img src={Icons.comother} alt="" className="w-[50%]" />
          </a>
          <a href="https://t.me/GODZinu" className="w-[50%] mt-[5rem]">
            <img src={Icons.comtelegram} alt="" className="w-[50%]" />
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Community;

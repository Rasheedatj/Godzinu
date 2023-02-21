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
        <img src={Icons.godzilla} alt="" className="w-[100%] md:w-[50%]" />
        <div className="flex justify-center w-[100%] lg:w-[50%]">
          <img src={Icons.icons} alt="" className="w-[70%]" />
        </div>
      </section>
    </motion.div>
  );
};

export default Community;

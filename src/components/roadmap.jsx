import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";
import { Icons } from "../assets";

const Roadmap = () => {
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
    <div className="py-[5rem] " id="roadmap">
      <h1 className="gradient text-[35px] mb-[1rem] md:mb-[15rem] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[4rem] text-center">
        roadmap
      </h1>

      <div className="w-[100%] flex justify-center">
        <img
          src={Icons.road}
          alt=""
          className="w-[100%] lg:w-[50%] mb-[3rem]"
        />
      </div>

      {/* --------stages------ */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInVariantAnimation}
        className="flex flex-col md:flex-row gap-[4rem] items-center w-[100%]"
      >
        {/* ---stage1-- */}
        <div className=" w-[100%] flex justify-center">
          <img src={Icons.stage1} alt="stage1" />
        </div>

        {/* ---stage2-- */}
        <div className="  w-[100%] flex justify-center">
          <img src={Icons.stage2} alt="stage2" />
        </div>

        {/* ---stage3-- */}
        <div className=" w-[100%] flex justify-center">
          <img src={Icons.stage3} alt="stage3" />
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;

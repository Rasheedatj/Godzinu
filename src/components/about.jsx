import { useEffect } from 'react';
import { Icons } from '../assets'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion';
import { slideInVariantAnimation } from '../util';


const About = () => {
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
      className="component py-[5rem]"
    >
      <div
        className="flex flex-col lg:flex-row lg:justify-between items-center  gap-[4rem] about"
        id="about"
      >
        {/* --------container 1----- */}
        <div className="w-[100%] lg:w-[40%]">
          <h1 className="text-[white]  text-[40.46px] leading-[50px] font-[500]  capitalize mb-[1rem] ">
            {" "}
            about <span className="gradient uppercase"> $Godzinu</span>
          </h1>

          <p className="text-[white] leading-[30px] lg:leading-[30px] lg:pt-[1rem] lg:text-[20.23px] font-[400]">
            Godzinu is a community run project. The progress speed of the project
            will be boosted by community involvement, and the way forward will be
            decided by the community itself through feedback and polls. <br />
            Godzinu (GODZ) had a fair launch model where 100 percent of the supply
            was released on the market on the Token Generation Event (TGE). 100%
            of the token supply was pooled in Pancakeswap on the launch day
          </p>

          <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] grad-border subscribe mt-[2rem]">
            <a href="https://medium.com/@GODZinu_io">read more</a>
          </button>
        </div>

        {/* --------container 2----------- */}
        <img src={Icons.aboutImg} alt="" className="w-[100%] lg:w-[50%]" />
      </div>
    </motion.div>
  );
};

export default About;

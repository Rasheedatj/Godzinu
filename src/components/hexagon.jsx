import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";
import { Icons } from "../assets";
import Team from "./team";
import Staking from "./staking";
import Token from "./token";
import Buy from "./buy";
import Faq from "./faq";
import Roadmap from "./roadmap";
import SuperPower from "./superpowers";
import Partner from "./partner";
import Community from "./community";

const Hexagon = () => {
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
    <div className="pb-[5rem] pt-[0] lg:py-[5rem]">
      {/* --------hexagon-------- */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInVariantAnimation}
        className="flex flex-col items-center gap-[3rem] lg:gap-[7rem]"
      >
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          Godzinu <span className="gradient">tokenomics</span>
        </h1>

        <div>
          <img src={Icons.hexagon} alt="" />
        </div>
      </motion.div>

      {/* buyy */}
      <Buy />
      {/* -----staking program-------- */}
      <Staking />
      {/*------------ token links-------- */}
      <Token />
      {/* ------team-------- */}
      <Team />
      {/* -------oartner */}
      <Partner />
      {/* -------roadmap-------- */}
      <Roadmap />

      {/* --------super powers-------- */}
      <SuperPower />

      {/* ---faq----- */}
      <Faq />
      {/* --------join our community------------ */}
      <Community />
    </div>
  );
};

export default Hexagon;

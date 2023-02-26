import { Icons } from "../assets";
import ScrollAnimation from 'react-animate-on-scroll';


const Roadmap = ({offset}) => {
  return (
    <div className="py-[5rem] " id="roadmap">
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
      <h1 className="gradient text-[35px] mb-[3rem] md:mb-[5rem] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[4rem] text-center">
          roadmap
        </h1>
        {/* --------stages------ */}
        <div
        
          className="flex flex-col md:flex-row gap-[4rem] lg:gap-[0] items-center w-[100%]"
        >
          {/* ---stage1-- */}
          <div className=" w-[100%] flex justify-center">
            <img src={Icons.stages} alt="stage1" className="w-[90%] lg:w-[70%]" />
          </div>
      
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Roadmap;

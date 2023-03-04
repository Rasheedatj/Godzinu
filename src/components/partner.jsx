import { Icons } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

const Partner = ({ offset }) => {
  return (
    <div className="mt-[7rem]">
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <h1 className="text-[white] text-center  text-[25px] lg:text-[50.46px] lg:leading-[50px] font-[500]  capitalize gradient mb-[5rem]">
          our partners
        </h1>

        <section className="flex  flex-row  gap-[2rem]  items-center justify-between">
          {/* ----partner 1---- */}
          <div className="flex flex-col gap items-center  md:mt-[0]">
            <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877973/coinofficial_opor4h.svg" alt="rango" />
            <p className="text-[white] leading-[20px] lg:leading-[40px] pt-[1rem] lg:text-[25px] font-[600] lg:w-[100%] pl-[20px] text-center capitalize">
              coin official
            </p>
          </div>
          {/* ---partner 2--- */}
          <div className="flex flex-col gap items-center">
            <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877988/rango_am8tih.svg" alt="rango" />
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[25px] font-[600]  text-center capitalize">
              rango exchange
            </p>
          </div>
          {/* ----patner 3---- */}
          <div className="flex flex-col gap  items-center">
            <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677878005/zah_fxjbsd.svg" alt="rango" />
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[25px] font-[600]  text-center capitalize">
              Zahnymous
            </p>
          </div>
          {/* -----partner 4----- */}
          <div className="flex flex-col gap items-center">
            <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877982/interfi_zojlzv.svg" alt="rango" />
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[25px] font-[600] lg:w-[60%]  text-center capitalize">
              interfi
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Partner;

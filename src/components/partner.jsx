import { Icons } from "../assets";

const Partner = () => {
  return (
    <div className="mt-[7rem]">
      <h1 className="text-[white] text-center  text-[35px] lg:text-[50.46px] lg:leading-[50px] font-[500]  capitalize gradient mb-[5rem]">
        we partner with
      </h1>

      <section className="flex  flex-row  gap-[2rem]  items-center justify-between">
        {/* ----partner 1---- */}
        <div className="flex flex-col gap items-center mt-[30px] md:mt-[0]">
          <img src={Icons.coin} alt="rango" />
          <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%] pl-[20px] text-center">
            coin official
          </p>
        </div>
        {/* ---partner 2--- */}
        <div className="flex flex-col gap items-center">
          <img src={Icons.rango} alt="rango" />
          <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%] text-center">
            rango
          </p>
        </div>
        {/* ----patner 3---- */}
        <div className="flex flex-col gap  items-center">
          <img src={Icons.zah} alt="rango" />
          <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%] text-center">
            Zahnymous
          </p>
        </div>
        {/* -----partner 4----- */}
        <div className="flex flex-col gap items-center">
          <img src={Icons.interfi} alt="rango" />
          <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%]  text-center">
            interfi
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partner;

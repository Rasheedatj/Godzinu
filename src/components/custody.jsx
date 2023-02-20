import { Icons } from "../assets";

const Custody = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center  gap-[4rem] lg:gap-[0]">
      <div className="w-[100%] lg:w-[50%]">
        <img src={Icons.godzilla} alt="" className="w-[100%] lg:w-[70%]" />
      </div>

      <div className="w-[100%] lg:w-[50%] mx-auto container">
        <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize">
          full{" "}
          <span className="gradient block pt-[1rem] lg:pt-[2rem]">
            self custody
          </span>
        </h1>
        <p className="text-[white] leading-[40px]  text-[20.23px] font-[400] w-[100%] lg:w-[65%]">
          Swap from your own wallet. Be your own bank. No centralized bridges or
          wrapping assets
        </p>
      </div>
    </div>
  );
};

export default Custody;

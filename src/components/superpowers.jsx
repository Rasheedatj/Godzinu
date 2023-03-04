import ScrollAnimation from "react-animate-on-scroll";
import { Icons } from "../assets";

const SuperPower = ({ offset }) => {
  return (
    <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
      <div className="flex flex-col  items-center gap-[3rem] lg:gap-[7rem] mt-[4rem] mb-[10rem]">
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          Giving you defi <span className="gradient">super powers</span>
        </h1>

        {/* -------sub boxes------ */}

        <div className="flex flex-col lg:flex-row  md:gap-[3rem] lg:gap-[2rem] items-center ">
          {/* --box 1--- */}
          <section className=" text-[white] w-[100%]   items-center lg:w-[100%]  gray">
            <div className="flex flex-col md:flex-row p-[1rem] gap-[1rem] defi items-center">
              <div>
                <h1 className="text-[30px] lg:text-[57.66px] font-[700] md:mb-[1rem] lg:mb-[0]">
                  Wallets+
                </h1>
                <p className="text-[white] font-[400]  lg:text-[20px] leading-[30px]">
                  Robust multi-chain wallet support: Trade directly from your
                  own wallet. Be your own bank
                </p>
              </div>

              <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677878013/wallets-bg_uysu9y.svg" alt="" className="md:w-[40%]" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border mt-[2rem]">
              <a href="#">coming soon</a>
            </button>
          </section>

          {/* ------box 2------ */}

          <section className=" text-[white]    w-[100%]  lg:w-[100%]  gray">
            <div className="flex flex-col md:flex-row-reverse items-center lg:flex-row p-[1rem] gap-[1rem] defi ">
              <div className="lg:w-[65%]">
                <h1 className="lg:text-[35px] font-[700]  text-[30px] md:mb-[1rem] lg:mb-[0]">
                  GODZINU NFTs{" "}
                </h1>
                <p className="text-[white] font-[400] lg:text-[20px] leading-[30px]">
                  GODZinu NFTs giving more utilities and another mode of
                  expression to the #GODZillian community.
                </p>
              </div>

              <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877996/safe_rlffsx.svg" alt="" className="md:w-[40%]" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border  mt-[2rem]">
              <a href="#">coming soon</a>
            </button>
          </section>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default SuperPower;

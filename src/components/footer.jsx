import { Icons } from "../assets";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-[4rem] lg:gap-[8rem] pb-[4rem] relative footer py-4">
      {/* -------pack one----- */}
      <section className="w-[100%] ">
        <a href="#">
          <img src={Icons.footerimg} alt="godzingu logo" />
        </a>

        <p className="mt-[2rem] text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] items-center  lg:w-[100%]">
          Godzinu is a community run project. The progress speed of the project
          will be boosted by community involvement, and the way forward will be
          decided by the community itself through feedback and polls
        </p>

        <p className="hidden md:block text-[16.39px] leading-[39px] text-[#7c859f] mt-[5rem] absolute bottom-[4rem] ">
          All rights reserved@2023
        </p>
      </section>

      {/* ------pack 2----- */}
      <section className="w-[100%] md:pl-[2rem]">
        <h1 className="text-[white] font-[700] text-[29px] leading-[39px] capitalize pb-[3rem]">
          newsletter
        </h1>

        {/* -----search----- */}
        <div className="flex border-[3px] subscribe w-[100%] ">
          <form action="" className="w-[70%]">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              id="email"
              className="bg-[black] p-[.5rem] lg:p-[1rem] text-[white]  w-[100%]"
            />
          </form>
          <p className="btn flex items-center justify-center text-[white] w-[30%] lg:text-[21.39px] ">
            submit
          </p>
        </div>

        <div className="flex   flex-row gap-[2rem]  md:gap-[6rem] lg:gap-[4rem] mt-[3rem] pt-[3rem] lg:border-t-[1px] lg:border-[#ffffff52]">
          {/* -------about us--------- */}
          <div className="w-[50%]">
            <h3 className="text-[white] capitalize font-[800] text-[20px] leading-[40px]">
              about us
            </h3>
            <a href="" className="link ">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                website
              </li>
            </a>
            <a href="https://twitter.com/GODZinu_io" className="link ">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                twitter
              </li>
            </a>
            <a href="https://t.me/GODZinu" className="link ">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                telegram
              </li>
            </a>
            <a href="https://t.me/GODZinuAnn" className="link ">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                telegram announcement
              </li>
            </a>
            <a href="https://medium.com/@GODZinu_io" className="link">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                medium
              </li>
            </a>
            <a href="" className="link">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                whitepaper
              </li>
            </a>
          </div>

          {/* ------support-------- */}
          <div className="w-[50%]">
            <h3 className="text-[white] capitalize font-[800] text-[20px] leading-[40px]">
              token info
            </h3>
            <a href="" className="link">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                contract address
              </li>
            </a>
            <a href="#community" className="link">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                pancakeSwap
              </li>
            </a>
            <a href="" className="link">
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                desktool
              </li>
            </a>
            <a
              href="https://github.com/interfinetwork/project-delivery-data/blob/main/Godzilla%20Project/GodzillaProject_AuditReport_InterFi.pdf"
              className="link"
            >
              <li className="text-[white] list-none font-[100] leading-[50px] capitalize">
                audit
              </li>
            </a>
          </div>
        </div>

        <p className="md:hidden block text-[16.39px] leading-[39px] text-[#7c859f]  mt-[5rem] ">
          All rights reserved@2023
        </p>
      </section>
    </footer>
  );
};

export default Footer;

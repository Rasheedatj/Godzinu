import about from "../assets/about0img.svg";

const About = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-between items-center  gap-[4rem] about"
      id="about"
    >
      {/* --------container 1----- */}
      <div>
        <h1 className="text-[white]  text-[40.46px] leading-[50px] font-[500]  capitalize mb-[1rem]">
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
          <a href="#">read more</a>
        </button>
      </div>

      {/* --------container 2----------- */}
      <img src={about} alt="" />
    </div>
  );
};

export default About;

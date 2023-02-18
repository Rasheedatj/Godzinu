import { useState, useEffect, useRef } from "react";

const Faq = () => {
  const [openAccordion, setAccordionOpen] = useState(false);

  const handleClick = () => {
    setAccordionOpen(!openAccordion);
  };
  return (
    <div className="my-[5rem] accordion">
      <h1 className="text-[white]  text-[25px] lg:text-[100.9px] leading-[120px] font-[500]  text-center capitalize pb-[2rem] gradient">
        FAQs
      </h1>

      {/* questions and answer */}
      {/* -----faq 1--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
            onClick={() => handleClick()}
          >
            1. what is the godzilla project
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
          GODZinu began as a decentralised and fair MEME project backed by a
          great storyline and a narrative of turbulence faced by the crypto
          investors over the past year. GODZinu acts as a medium for the
          community to display their emotions. 
        </div>
      </div>
      {/* -----faq 2--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
            onClick={() => handleClick()}
          >
            2. what is the $ GODZ token
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
            $GODZ token is the native token of the project and is used as medium
          to generate income to fund Operations, Marketing, Liquidity
          Bootstrapping, Staking Rewards and Token Burns.
        </div>
      </div>

      {/* -----faq 3--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
            onClick={() => handleClick()}
          >
            3. What is the Godzilla Dex Aggregrator
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
          The Multi-chain Dex Aggregator is a product where any crypto user will
          be able to connect their own “non-custodial” wallet and be able to
          swap their tokens to any other tokens without the need of any mediator
          or central authority. This becomes very essential in the recent
          considering the FTX fiasco which led to billions of user-funds getting
          locked and used for personal gains by few centralised figures.
        </div>
      </div>

      {/* -----faq 4--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
            onClick={() => handleClick()}
          >
            4. What all chains are supported in the Dex Aggregator?
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
          Supports top-rate 19 Blockchains including BSC, ETH, Arbitrum,
          Polygon, AVAX, Fantom, etc. Non-EVM chains to be added (BTC, Osmosis
          etc).
        </div>
      </div>

      {/* -----faq 5--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
            onClick={() => handleClick()}
          >
            5. Is there a Staking Program live?
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
          Yes. Details{" "}
          <a href=" https://medium.com/@GODZinu_io/godz-staking-now-live-403749ea6f4">
            here
          </a>
        </div>
      </div>
      {/* -----faq 6--- */}
      <div className={`content ${openAccordion ? "active" : ""}`}>
        <div className="">
          <h3
            className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] "
            onClick={() => handleClick()}
          >
            6. Where is the Godzilla community available?
          </h3>
        </div>
        <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
          5 Godzilla community is available on Twitter & Telegram. {" "}
          <a href=" https://twitter.com/GODZinu_io ">Twitter</a>
          <a href="https://t.me/Godzilla_io ">Telegram</a>
        </div>
      </div>
    </div>
  );
};

export default Faq;

export const accordionData = [
  {
    question: "1. what is the Godzinu project",
    answer:
      "GODZinu began as a decentralised and fair MEME project backed by a great storyline and a narrative of turbulence faced by the crypto investors over the past year. GODZinu acts as a medium for the community to display their emotions.",
  },
  {
    question: "2. what is the $GODZ token",
    answer:
      "$GODZ token is the native token of the project and is used as medium to generate income to fund Operations, Marketing, Liquidity Bootstrapping, Staking Rewards and Token Burns.",
  },
  {
    question: "3. What is the Godzinu Dex Aggregrator",
    answer:
      "The Multi-chain Dex Aggregator is a product where any crypto user will be able to connect their own “non-custodial” wallet and be able to swap their tokens to any other tokens without the need of any mediator or central authority. This becomes very essential in the recent considering the FTX fiasco which led to billions of user-funds getting locked and used for personal gains by few centralised figures.",
  },
  {
    question: " 4. What all chains are supported in the Dex Aggregator?",
    answer:
      " Supports top-rate 19 Blockchains including BSC, ETH, Arbitrum, Polygon, AVAX, Fantom, etc. Non-EVM chains to be added (BTC, Osmosis etc).",
  },
  {
    question: "   5. Is there a Staking Program live?",
    answer: " Yes details",
    links: [
      {
        name: "here",
        src: "https://medium.com/@GODZinu_io/godz-staking-now-live-403749ea6f4",
      },
    ],
  },
  {
    question: " 6. Where is the Godzinu community available?",
    answer: " Godzinu community is available on Twitter & Telegram. ",
    links: [
      {
        name: "Twitter ",
        src: " https://twitter.com/GODZinu_io ",
      },
      {
        name: " Telegram",
        src: "https://t.me/Godzilla_io  ",
      },
    ],
  },
];

export const containerVariantAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 0.4 },
  },
};

export const slideInVariantAnimation = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.8 },
  },
};

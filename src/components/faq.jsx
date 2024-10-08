import { accordionData } from "../util.js";
import Question from "./question";
import { v4 as uuidv4 } from "uuid";

const Faq = () => {
  return (
    <div className="my-[8rem] accordion lg:px-[10rem]">
      <h1 className="text-[white]  text-[25px] lg:text-[60.46px] lg:leading-[120px] font-[500]  text-center capitalize md:pb-[2rem] gradient">
        FAQs
      </h1>
      {/* questions and answer */};
      {accordionData &&
        accordionData.map((data) => (
          <Question
            key={uuidv4()}
            question={data.question}
            answer={data.answer}
            links={data.links}
          />
        ))}
    </div>
  );
};

export default Faq;

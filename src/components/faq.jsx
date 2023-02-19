import { accordionData } from "../util.js";
import Question from "./question";

const Faq = () => {
  return (
    <div className="my-[5rem] accordion">
      <h1 className="text-[white]  text-[35px] lg:text-[100.9px] lg:leading-[120px] font-[500]  text-center capitalize md:pb-[2rem] gradient">
        FAQs
      </h1>
      {/* questions and answer */};
      {accordionData &&
        accordionData.map((data) => (
          <Question
            question={data.question}
            answer={data.answer}
            links={data.links}
          />
        ))}
    </div>
  );
};

export default Faq;

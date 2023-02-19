import { useState } from "react";

const Question = ({ question, answer, links }) => {
  const [openAccordion, setAccordionOpen] = useState(false);

  const handleClick = () => {
    setAccordionOpen(!openAccordion);
  };
  return (
    <div className={`content ${openAccordion ? "active" : ""}`}>
      <div className="">
        <h3
          className="gradient font-[400] lg:text-[39.36px] lg:leading-[50.09px] pb-[1rem] pt-[1.5rem]"
          onClick={() => handleClick()}
        >
          {question.trim()}
        </h3>
      </div>
      <div className="lg:text-[26.47px] text-[white] h-[0]  overflow-hidden font-[400] lg:leading-[44.11px] answer">
        {answer.trim()}{" "}
        {links &&
          links.map((link) => <a href={link.src}>{link.name.trim()}</a>)}
      </div>
    </div>
  );
};

export default Question;

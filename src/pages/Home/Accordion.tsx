import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
type CustomAccordionProps = {
  title: string; // title is a string
  content: React.ReactNode; // content is a string
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="single-my-account mb-10">
      <div
        className="panel-heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          //   borderBottom: '1px solid #ccc',
        }}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? <BsDash /> : <BsPlus />}
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default CustomAccordion;

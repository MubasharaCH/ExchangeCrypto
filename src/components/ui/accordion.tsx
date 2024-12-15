import { useState } from "react";
import cn from "classnames";
import { PlusIcon } from "@/components/icons/plus-icon";
import { motion } from "framer-motion"; // Import motion for animations

type CollapseProps = {
  i: number;
  question: string;
  answer: string;
  translatorNS: string;
  expanded: number;
  setExpanded: React.Dispatch<React.SetStateAction<number>>; // Update the type for setExpanded
};

const Collapse: React.FC<CollapseProps> = ({
  i,
  expanded,
  setExpanded,
  question,
  answer,
  translatorNS,
}) => {
  const isOpen = i === expanded;
  // active state style
  const activeClass = isOpen ? "shadow-sm" : "";

  return (
    <div
      className={cn(
        "border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base",
        activeClass
      )}
    >
      {/* Use motion.div here to apply animation */}
      <motion.div
        initial={false} // Disable animation on the initial render
        onClick={() => setExpanded(isOpen ? -1 : i)} // Change false to -1
        className="py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors"
      >
        <h2 className="text-sm md:text-base font-semibold leading-relaxed text-heading">
          {question}
        </h2>
        {isOpen ? (
          <p>-</p>
        ) : (
          <PlusIcon className="flex-shrink-0 stroke-2" width={20} height={20} />
        )}
      </motion.div>

      {/* Use motion.div to animate the answer */}
      <motion.div initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial="from" // Define initial animation state
            animate="to" // Define final animation state
            exit="from" // Define exit animation state
            variants={{ from: { opacity: 0 }, to: { opacity: 1 } }} // Define variants for animation
          >
            <div className="md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark">
              {answer}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

type AccordionProps = {
  translatorNS: string;
  data: {
    question: string;
    answer: string;
  }[];
};

const Accordion: React.FC<AccordionProps> = ({ data, translatorNS }) => {
  const [expanded, setExpanded] = useState<number>(-1); // Set initial value as -1 (no item expanded)

  return (
    <>
      {data.map(({ question, answer }, index) => (
        <Collapse
          i={index}
          key={question}
          question={question}
          answer={answer}
          expanded={expanded}
          setExpanded={setExpanded}
          translatorNS={translatorNS}
        />
      ))}
    </>
  );
};

export default Accordion;

// import { useState } from "react";
import { Fragment, useState } from "react";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";

const Faq = ({ questionsObj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(e, id) {
    if (selectedId !== id) {
      setSelectedId(id);
    }
    if (selectedId === id) {
      setIsOpen(!isOpen);
    }
  }
  console.log(`selected value is ${selectedId}`);
  console.log(`isOpen value is ${isOpen}`);
  return (
    <main>
      {questionsObj.map((question, index) => (
        <Fragment key={question.id}>
          <details
            onClick={(e) => handleClick(e, question.id)}
            open={selectedId === question.id ? isOpen : null}
          >
            <summary>
              <span>{question.question}</span>

              <img
                src={
                  isOpen === false && selectedId === question.id
                    ? `${minus}`
                    : `${plus}`
                }
                alt=""
              />
            </summary>
            <p className="animate__animated animate__flipInX">
              {question.answer}
            </p>
          </details>
          {index !== questionsObj.length - 1 ? <hr /> : null}
        </Fragment>
      ))}
    </main>
  );
};

export default Faq;

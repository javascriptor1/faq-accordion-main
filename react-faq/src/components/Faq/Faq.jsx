import { Fragment, useState } from "react";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";

const Faq = ({ questionsObj }) => {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(e, question) {
    e.preventDefault();
    if (selectedId !== question.id) {
      setSelectedId(question.id);
    } else {
      setSelectedId(null);
    }
  }

  return (
    <main>
      {questionsObj.map((question, index) => (
        <Fragment key={question.id}>
          <details
            onClick={(e) => handleClick(e, question)}
            open={selectedId === question.id}
          >
            <summary>
              <span>{question.question}</span>

              <img
                src={selectedId === question.id ? `${minus}` : `${plus}`}
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

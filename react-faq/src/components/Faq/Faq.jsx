import { useState } from "react";
import { Fragment } from "react";

const Faq = ({ questionsObj }) => {
  //   console.clear();

  const [isopen, setIsOpen] = useState("");
  return (
    <main>
      {questionsObj.map((question, index) => (
        <Fragment key={question.id}>
          <details >
            <summary>
              <span>{question.question}</span>
              <img src="assets/images/icon-plus.svg" alt="" />
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

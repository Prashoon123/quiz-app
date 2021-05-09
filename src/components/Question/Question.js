import React, { useEffect, useState } from "react";
import Option from "../Option/Option";
import "./Question.css";
import { useHistory } from "react-router-dom";

function Question({
  data: { question, correct_answer, incorrect_answers },
  handleAnswer,
  className,
  currentQuestionNumber,
  disabled,
  handleNavigation,
}) {
  const [shuffledOptions, setShuffledQuestions] = useState([]);

  const history = useHistory()

  const [options, setOptions] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  useEffect(() => {
    setShuffledQuestions(
      [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    );
  }, [correct_answer, incorrect_answers]);

  const handleResult = () => {
    history.replace("/result")
  };

  return (
    <div className="question">
      <div className="question__questionContainer">
        <p
          dangerouslySetInnerHTML={{
            __html: `${currentQuestionNumber}. ${question}`,
          }}
        />
      </div>
      <div className="question__choicesContainer">
        <div>
          {shuffledOptions.slice(0, 2).map((option, index) => (
            <div className="question__group">
              <Option
                option={option}
                onClick={() => {
                  handleAnswer(option);
                  setOptions({ ...options, [index]: true });
                }}
                className={
                  disabled
                    ? option === correct_answer
                      ? "option__correct"
                      : options[index] === true
                      ? "option__incorrect"
                      : ""
                    : ""
                }
                disabled={disabled}
              />
            </div>
          ))}
        </div>

        <div>
          <div>
            {shuffledOptions
              .slice(2, shuffledOptions.length)
              .map((option, index) => (
                <div className="question__group">
                  <Option
                    option={option}
                    onClick={() => {
                      handleAnswer(option);
                      setOptions({ ...options, [index + 2]: true });
                    }}
                    className={
                      disabled
                        ? option === correct_answer
                          ? "option__correct"
                          : options[index + 2] === true
                          ? "option__incorrect"
                          : ""
                        : ""
                    }
                    disabled={disabled}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {disabled && currentQuestionNumber !== 10 ? (
        <div className="question__buttonContainer">
          <button
            className="question__button"
            onClick={() => {
              handleNavigation();
              setOptions({ 0: null, 1: null, 2: null, 3: null });
            }}
          >
            Next Question
          </button>
        </div>
      ) : disabled && currentQuestionNumber === 10 ? (
        <div className="question__buttonContainer">
          <button className="question__button" onClick={handleResult}>
            See your score
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Question;

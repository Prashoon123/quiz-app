import { useEffect, useState } from "react";
import axios from "axios";
import "./Sports.css";
import { FadingCircle } from "better-react-spinkit";
import Question from "../Question/Question";
import { score } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

function GK() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [userScore, setUserScore] = useRecoilState(score);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
        )
        .then((data) => {
          setQuestions(data.data.results);
          setCurrentIndex(0);
        })
        .catch((error) => alert(error.message));
    }

    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    setAnswered(true);

    if (answer === questions[currentIndex].correct_answer) {
      setUserScore(userScore + 1);
      setAnswered(true);
    }
  };

  const handleNavigation = () => {
    setCurrentIndex(currentIndex + 1);
    setAnswered(null);
  };

  if (questions.length > 0) {
    return (
      <div className="sports">
        <Question
          data={questions[currentIndex]}
          currentQuestionNumber={currentIndex + 1}
          disabled={answered}
          handleAnswer={handleAnswer}
          handleNavigation={handleNavigation}
        />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <FadingCircle size={80} color="white" handleAnswer={handleAnswer} />
        <div style={{ height: 10 }} />
        <h2>Loading the questions...</h2>
      </div>
    );
  }
}

export default GK;

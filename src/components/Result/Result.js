import "./Result.css";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useHistory } from "react-router-dom";

function Result({ score }) {
  const history = useHistory();

  return (
    <div className="result">
      <h1>Your score is: {score}/10</h1>
      <h3>Share your score on:</h3>
      <div className="result__shareContainer">
        <EmailShareButton
          className="result__icon"
          subject="Quiz App"
          body={`Hi everyone, I got my score of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          url="https://amazing-quiz-app.web.app/"
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>

        <TwitterShareButton
          className="result__icon"
          title={`Hi everyone, I got my score of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          via="PrashoonB"
          url="https://amazing-quiz-app.web.app/"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <FacebookShareButton
          className="result__icon"
          quote={`Hi everyone, I got my score of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          url="https://amazing-quiz-app.web.app/"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          className="result__icon"
          title={`Hi everyone, I got my score of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          url="https://amazing-quiz-app.web.app/"
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        <TelegramShareButton
          className="result__icon"
          title={`Hi everyone, I got my score of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          url="https://amazing-quiz-app.web.app/"
        >
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>

        <RedditShareButton
          className="result__icon"
          title={`Hi everyone, I scored of ${score}/10 on the quiz app. Even you can play the quiz by going to the following link -`}
          url="https://amazing-quiz-app.web.app/"
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
      </div>

      <button onClick={() => history.replace("/")} className="result__button">
        Play Some Other Quiz
      </button>
    </div>
  );
}

export default Result;

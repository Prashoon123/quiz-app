import "./App.css";
import Topics from "./components/Topics/Topics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GK from "./components/GeneralKnowledgeQuiz/GK";
import { useRecoilValue } from "recoil";
import Result from "./components/Result/Result";
import { score } from "./recoil/atoms";
import Sports from "./components/Sports/Sports";
import Computers from "./components/Computers/Computers";
import VideoGames from "./components/VideoGames/VideoGames";
import ScienceNature from "./components/Science&Nature/Science&Nature";

function App() {
  const userScore = useRecoilValue(score);

  return (
    // BEM naming convention
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div style={{ height: 20 }} />
            <div className="app__titleContainer">
              <h1 className="app__title">Quiz App</h1>
            </div>
            <div style={{ height: 20 }} />
            <Topics />
          </Route>
          <Route path="/general-knowledge">
            <GK />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/computers">
            <Computers />
          </Route>
          <Route path="/video-games">
            <VideoGames />
          </Route>
          <Route path="/science-and-nature">
            <ScienceNature />
          </Route>
          <Route path="/result">
            <Result score={userScore} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

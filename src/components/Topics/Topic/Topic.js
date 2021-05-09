import { useHistory } from "react-router";
import "./Topic.css";

function Topic({ name, link }) {
  const history = useHistory();

  return (
    <>
      <div className="topic" onClick={() => history.push(`/${link}`)}>
        <p>{name}</p>
      </div>
      <div style={{ height: 20 }} />
    </>
  );
}

export default Topic;

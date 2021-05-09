import Topic from "./Topic/Topic";
import "./Topics.css";

function Topics() {
  const topics = [
    { name: "General Knowledge", link: "general-knowledge" },
    { name: "Sports", link: "sports" },
    { name: "Computers", link: "computers" },
    { name: "Video Games", link: "video-games" },
    { name: "Science & Nature", link: "science-and-nature" },
  ];

  return (
    <div className="topics">
      {topics.map(({ name, link }) => (
        <Topic name={name} link={link} />
      ))}
    </div>
  );
}

export default Topics;

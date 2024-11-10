import React, { useContext } from "react";
import "./Preferences.css";
import UserContext from "../UserComponent/User";

const topics = [
  "Science",
  "Technology",
  "Health",
  "World",
  "Entertainment",
  "Sports",
  "Business",
  "Nation",
];

function Preferences({ closePreferences }) {
  const { selectedTopics, setSelectedTopics } = useContext(UserContext);

  const handleTopicChange = (topic) => {
    setSelectedTopics((prevSelected) =>
      prevSelected.includes(topic)
        ? prevSelected.filter((t) => t !== topic)
        : [...prevSelected, topic]
    );
  };

  return (
    <div className="modal">
      <div className="preferences">
        <div className="close-button-container">
          <button onClick={closePreferences} className="close-button">
            X
          </button>
        </div>
        <h1>Select your preferred topics</h1>
        <form>
          {topics.map((topic, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={topic}
                checked={selectedTopics.includes(topic)}
                onChange={() => handleTopicChange(topic)}
              />
              {topic}
            </label>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Preferences;

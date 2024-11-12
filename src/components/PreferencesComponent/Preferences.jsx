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
        <h4>Select news categories to fine-tune your feed.</h4>
        <form>
          <div className="preference-list">
            {topics.map((topic, index) => (
              <div key={index} className="preference-item">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicChange(topic)}
                />
                <label htmlFor={`checkbox-${index}`}>
                  {topic}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Preferences;

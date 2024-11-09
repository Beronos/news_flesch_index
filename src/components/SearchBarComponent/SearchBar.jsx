import { useState } from "react";
import "./SearchBar.css";
import { readabilityLevels } from "../../utils/fleschUtils.js";

function SearchBar({ onSearch }) {
  const [selectedGrade, setSelectedGrade] = useState("All Grades");

  const handleGradeChange = (event) => {
    const selected = event.target.value;
    setSelectedGrade(selected);
    onSearch(selected); // Call onSearch with selected grade level
  };

  return (
    <div className="searchbar-container">
      <select
        value={selectedGrade}
        onChange={handleGradeChange}
        className="grade-dropdown"
      >
        <option value="All Grades">Select a grade level (All Grades)</option>
        {readabilityLevels.map(({ level }, i) => {
          return (
            <option key={i} value={level}>
              {level}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SearchBar;

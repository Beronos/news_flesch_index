import { useState } from "react";
import { readabilityLevels } from "../../utils/fleschUtils.js";
import "./SearchBar.css";

function SearchBar({ onSearch, grade }) {
  const [selectedGrade, setSelectedGrade] = useState(grade);

  const handleGradeChange = (event) => {
    const selected = event.target.value;
    setSelectedGrade(selected);
    onSearch(selected);
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

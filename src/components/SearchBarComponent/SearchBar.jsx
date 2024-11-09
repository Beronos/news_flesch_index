import { useState } from "react";
import "./SearchBar.css";

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
        <option value="All Grades">All Grades</option>
        <option value="5th grade">5th grade</option>
        <option value="6th grade">6th grade</option>
        <option value="7th grade">7th grade</option>
        <option value="8th & 9th grade">8th & 9th grade</option>
        <option value="10th to 12th grade">10th to 12th grade</option>
        <option value="College">College</option>
        <option value="College graduate">College graduate</option>
      </select>
    </div>
  );
}

export default SearchBar;

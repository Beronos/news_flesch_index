import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;

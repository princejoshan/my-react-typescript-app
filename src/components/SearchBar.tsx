import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "200px",
      }}
    />
  );
};

export default SearchBar;

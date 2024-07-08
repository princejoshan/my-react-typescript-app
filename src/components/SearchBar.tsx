import React from "react";


interface SearchBarProps {
  value:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SearchBar = ({ onChange,value } : SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "200px",
      }}
      onChange={onChange}
    />
  );
};

export default SearchBar;

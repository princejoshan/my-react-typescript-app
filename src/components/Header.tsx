import SearchBar from "./SearchBar";
import "../Header.css";
import { HeaderProps } from "../interfaces/HeaderProps";

const Header = ({ title, description }: HeaderProps) => {
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Implement your search logic here
    console.log(event.target.value);
  };

  return (
    <div className="header">
      <div className="left">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <SearchBar onChange={handleSearchChange} value="" />
      </div>
    </div>
  );
};

export default Header;

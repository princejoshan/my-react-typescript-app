import SearchBar from "./SearchBar";
import "../Header.css";
import { HeaderProps } from "../interfaces/HeaderProps";

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="header">
      <div className="left">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;

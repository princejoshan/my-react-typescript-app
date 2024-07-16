import SearchBar from "./SearchBar";
import "../Header.css";
import { HeaderProps } from "../interfaces/HeaderProps";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { search } from "../redux/homepage/actions";
import { useEffect } from "react";

const Header = ({ title, description }: HeaderProps) => {
  const dispatch = useDispatch();
  const searchQry = useSelector((state: AppState) => state.homepage.searchQuery);
  
  
  useEffect(() => {
    console.log("Header rendered")
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(event.target.value));
  };

  return (
    <div className="header">
      <div className="left">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <SearchBar onChange={handleSearchChange} value= {searchQry ?? ""} />
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import "../styles/Segment.css";
import MyQueries from "./MyQueries";
import Faq from "./FaqPage";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { filterQueryEntry, setSearchQuery } from "../redux/query/actions";
import { AppState } from "../redux/store";
import Button from "../components/Button";

interface Segment {
  title: string;
  content: string;
}

interface SegmentedContentProps {
  segments: Segment[];
}

const SegmentedContent = ({ segments }: SegmentedContentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const searchQry = useSelector((state: AppState) => state.query.searchQuery);

  useEffect(() => {
    setSearchQuery(searchQry);
  });

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
    dispatch(filterQueryEntry(event.target.value));
  };

  return (
    <div className="segmented-page">
      <div className="segment-tabs">
        <div>
          {segments.map((segment, index) => (
            <button
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {segment.title}
            </button>
          ))}
        </div>
        <div>
          <SearchBar
            onChange={handleSearchChange}
            value={searchQry}
          ></SearchBar>
          <Button text="Clear"></Button>
        </div>
       
      </div>
      {activeIndex === 0 && <MyQueries />}
      {activeIndex === 1 && <Faq />}
    </div>
  );
};

export default SegmentedContent;

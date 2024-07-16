import "../Header.css";
import Accordion from "./Accordian";
import { FaqConstants } from "../utility/Constants";
import { useEffect } from "react";
import { AppState } from "../redux/store";
import { useSelector } from "react-redux";

const Faq = () => {
  const filteredFaq= useSelector(
    (state: AppState) => state.homepage.homePagePropsFilteredItem?.faqfilteredList
  );

  useEffect(() => {
    console.log("FaqPage rendered")
  });

  return (
    <div>
      <div className="header">
        <div className="left">
          <div className="title">{FaqConstants.main_title}</div>
        </div>
      </div>
      <Accordion faqfilteredList ={filteredFaq}></Accordion>
    </div>
  );
};

export default Faq;

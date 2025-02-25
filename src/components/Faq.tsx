import { constants } from "buffer";
import "../Header.css";
import Accordion from "./Accordian";
import { FaqConstants } from "../utility/Constants";
const Faq = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <div className="title">{"Freqently ask Questions"}</div>
        </div>
      </div>
      <Accordion items={FaqConstants.faq_list}></Accordion>
    </div>
  );
};

export default Faq;

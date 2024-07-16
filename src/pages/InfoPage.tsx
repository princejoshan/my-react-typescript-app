import { InfoConstants } from "../utility/Constants";
import { useEffect } from "react";

const InfoPage = () => {
  useEffect(() => {
    console.log("InfoPage rendered");
  });
  return (
    <div>
      {InfoConstants.info_list.map((info) => (
        <div className="info-container">
          <div className="info-title">{info.title}:</div>
          <div className="info-value">{info.value}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoPage;

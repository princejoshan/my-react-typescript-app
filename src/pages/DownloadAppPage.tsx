import { useEffect } from "react";
import { sipcalculator } from "../utility/Constants";

const DownloadAppPage = () => {

  useEffect(() => {
    console.log("DownloadPage rendered")
  });

  return (
    <div>
      <div className="download-view">
        <div className="dwonlaod-title">
          {"Download our mobile app"}:
          <input type="text" placeholder="Link"></input>
        </div>
        <img src={sipcalculator} width="100" height="50"></img>
      </div>
    </div>
  );
};

export default DownloadAppPage;

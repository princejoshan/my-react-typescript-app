import { CalculatorConstants } from "../utility/Constants";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import Faq from "../components/Faq";
import HomePageHeader from "../components/HomepageHeader";
import InfoPage from "./InfoPage";
import DownloadAppPage from "./DownloadAppPage";
import { useEffect } from "react";

const HomePage = () => {

  useEffect(() => {
    console.log("HomePage rendered")
  });
  return (
    <div>
      <HomePageHeader />
      <div className="background-view">
        <Header
          title={CalculatorConstants.main_title}
          description={CalculatorConstants.main_description}
        ></Header>
        {/* <CardGrid cardProps={filteredCalculator ?? []}/> */}
        <CardGrid/>
        <Faq />
        <InfoPage/>
        <DownloadAppPage/>
      </div>
    </div>
  );
};
export default HomePage;

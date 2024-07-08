import { CalculatorConstants } from "../utility/Constants";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import Faq from "../components/Faq";
import NavBar from "../components/HomepageHeader";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="background-view">
        <Header
          title={CalculatorConstants.main_title}
          description={CalculatorConstants.main_description}
        ></Header>
        <CardGrid />
        <Faq />
      </div>
    </div>
  );
};
export default HomePage;

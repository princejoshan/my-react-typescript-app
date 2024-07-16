import Card from "../components/Card";
import "../CardGrid.css";
import { useNavigate } from "react-router-dom";
import { HomePageProps } from "../redux/homepage/types";
import { AppState } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// const CardGrid = ({ cardProps }: HomePageProps) => {
//   const navigate = useNavigate();
//   const handleCardClick = (index: number) => {
//     navigate(`/details/${index}`);
//   };

const CardGrid = () => {

  useEffect(() => {
    console.log("cardgrid rendered")
  });

  const filteredCalculator = useSelector(
    (state: AppState) => state.homepage.homePagePropsFilteredItem?.cardfilteredList
  );
  const navigate = useNavigate();
  const handleCardClick = (index: number) => {
    navigate(`/details/${index}`);
  };

  return (
    <div>
      <div className="card-grid">
        {filteredCalculator!.map((card, index) => (
          <Card
            key={index}
            image={card.image ?? ""}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default CardGrid;

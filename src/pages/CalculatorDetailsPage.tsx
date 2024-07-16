import React from "react";
import { useParams } from "react-router-dom";
import { CalculatorConstants } from "../utility/Constants";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { HomePageCalculatorItem } from "../redux/homepage/types";
const CalCulatorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cardList = useSelector(
    (state: AppState) => state.homepage.filteredCalculator
  );

  const defaultItem: HomePageCalculatorItem = {
    title: "Default Title",
    description: "Default Description",
    image: "default-image.png"
  };

  
  const card =
    cardList && cardList.length > 0
      ? cardList[parseInt(id ?? "0")]
      : null;

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.image ?? ""} alt={card.title} />
      <p>{card.description}</p>
    </div>
  );
};

export default CalCulatorDetail;

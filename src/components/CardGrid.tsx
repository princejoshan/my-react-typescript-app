import Card from "../components/Card";
import "../CardGrid.css";
import { CalculatorConstants } from "../utility/Constants";
import { useNavigate } from 'react-router-dom';


const CardGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    navigate(`/details/${index}`);
  };

  return (
    <div>
      <div className="card-grid">
        {CalculatorConstants.calculator_list.map((card, index) => (
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

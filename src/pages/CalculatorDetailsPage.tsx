
import React from 'react';
import { useParams } from 'react-router-dom';
import { CalculatorConstants } from '../utility/Constants';

const CalCulatorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const card = CalculatorConstants.calculator_list[parseInt(id ?? '0')];

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
import React from 'react';
import Card from '../components/Card';
import '../CardGrid.css';

const cards = [
  { title: 'Card 1', description: 'This is the first card.' },
  { title: 'Card 2', description: 'This is the second card.' },
  { title: 'Card 3', description: 'This is the third card.' },
  { title: 'Card 4', description: 'This is the fourth card.' },
  { title: 'Card 1', description: 'This is the first card.' },
  { title: 'Card 2', description: 'This is the second card.' },
  { title: 'Card 3', description: 'This is the third card.' },
  { title: 'Card 4', description: 'This is the fourth card.' },
  { title: 'Card 1', description: 'This is the first card.' },
  { title: 'Card 2', description: 'This is the second card.' },
  { title: 'Card 3', description: 'This is the third card.' },
  { title: 'Card 4', description: 'This is the fourth card.' },


];

const CardGrid: React.FC = () => {
  return (
    // <div className="background">
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    // </div>
  );
};

export default CardGrid;
import { FC } from "react";
import "../Card.css";

interface CardProps {
  title: string;
  description: string;
}

// const Card: FC<CardProps> = ({ title, description }) => {
//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};
export default Card;

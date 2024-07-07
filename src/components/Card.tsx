import "../Card.css";
import { CardProps } from '../interfaces/CardProps';

const Card = ({ title, description, image,onClick}: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="content-wrapper">
        <img src={image} alt={""} className="image" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
export default Card;

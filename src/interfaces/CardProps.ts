import { HeaderProps } from '../interfaces/HeaderProps';

export interface CardProps extends HeaderProps {
    image: string;
    onClick: () => void;
  }
  
import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  styleType?: 'primary' | 'secondary';
}

const Button = ({ text, onClick, disabled = false, styleType = 'primary' } : ButtonProps) => {
  return (
    <button
      className={`button ${styleType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
// src/components/Accordion.tsx
import React, { useState } from 'react';
import '../styles/Accordian.css';
import { AccordionItemProps, AccordionProps } from '../interfaces/AccordianProps';

const AccordionItem = ({ title, description, isOpen, onClick } : AccordionItemProps) => {
  return (
    <div className='accordion'>
      <div className="accordion-header" onClick={onClick}>
      <div className="accordion-title">{title}</div>
        <div className="accordion-icon">{isOpen ? '▲' : '▼'}</div>
              </div>
      {isOpen && <div className="accordion-content">{description}</div>}
    </div>
  );
};


const Accordion = ({ items } : AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={index === openIndex}
          description={item.description}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
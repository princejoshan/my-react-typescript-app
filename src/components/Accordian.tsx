// src/components/Accordion.tsx
import React, { useState } from 'react';
import '../styles/Accordian.css';

interface AccordionItemProps {
  title: string;
  des: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, des, isOpen, onClick }) => {
  return (
    <div className='accordion'>
      <div className="accordion-header" onClick={onClick}>
      <div className="accordion-title">{title}</div>
        <div className="accordion-icon">{isOpen ? '▲' : '▼'}</div>
              </div>
      {isOpen && <div className="accordion-content">{des}</div>}
    </div>
  );
};

// interface AccordionProps {
//   items: { title: string; content: React.ReactNode }[];
// }

interface AccordionProps {
    items: { title: string; description: string,image:string }[];
  }
  

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          des={item.description}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
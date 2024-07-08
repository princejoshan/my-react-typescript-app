import { HeaderProps } from "./HeaderProps";

export interface AccordionItemProps extends HeaderProps{
    isOpen: boolean;
    onClick: () => void;
  }

  export interface AccordionProps {
    items: { title: string; description: string,image:string }[];
  }

  
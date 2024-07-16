import { HeaderProps } from "../../interfaces/HeaderProps";

export interface HomePageCalculatorItem  {
  title: string;
  description: string;
  image: string; // Assuming 'image' is a string path
}

export interface HomePageFaqItem  {
  mainTitle: string;
  faqPropsList?: HomePageCalculatorItem[];
  filteredFaqPropsList?: HomePageCalculatorItem[];
}

export interface HomePagePropsItem  {
  cardPropsList: HomePageCalculatorItem[];
  faqPropsList?: HomePageCalculatorItem[];
}

export interface HomePageFilteredData  {
  cardfilteredList?: HomePageCalculatorItem[];
  faqfilteredList?: HomePageCalculatorItem[];
}

export interface HomePageProps {
  cardProps: HomePageCalculatorItem[];
  filteredCalculator?: HomePageCalculatorItem[];
  faqProps?: HomePageFaqItem;
  searchQuery?:string;
  homePagePropsItem?: HomePagePropsItem;
  homePagePropsFilteredItem?: HomePageFilteredData;
}
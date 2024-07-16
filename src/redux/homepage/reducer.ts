import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { CalculatorConstants, FaqConstants } from "../../utility/Constants";
import { HomePageProps, HomePageFaqItem } from "./types";

const initialState: HomePageProps = {
  cardProps: CalculatorConstants.calculator_list,
  filteredCalculator: CalculatorConstants.calculator_list,
  searchQuery: "",
  faqProps: {
    mainTitle: FaqConstants.main_title,
    faqPropsList: FaqConstants.faq_list,
    filteredFaqPropsList: FaqConstants.faq_list,
  },
  homePagePropsItem:{cardPropsList:CalculatorConstants.calculator_list,faqPropsList:FaqConstants.faq_list},
  homePagePropsFilteredItem:{cardfilteredList:CalculatorConstants.calculator_list,faqfilteredList:FaqConstants.faq_list}

};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getCardList, (state) => {});
    builder.addCase(actions.search, (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchQuery = searchTerm;
      state.filteredCalculator = state.cardProps.filter(
        (calculator) =>
          calculator.title.toLowerCase().includes(searchTerm) ||
          calculator.description.toLowerCase().includes(searchTerm)
      );
      const filteredCards = state.homePagePropsItem?.cardPropsList?.filter(
        (filterData) =>
          filterData.title.toLowerCase().includes(searchTerm) ||
        filterData.description.toLowerCase().includes(searchTerm)
      );
      const filteredFaq = state.homePagePropsItem?.faqPropsList?.filter(
        (filterData) =>
          filterData.title.toLowerCase().includes(searchTerm) ||
        filterData.description.toLowerCase().includes(searchTerm)
      );
      state.homePagePropsFilteredItem = {cardfilteredList:filteredCards,faqfilteredList: filteredFaq};
    });
  },
});

export default homePageSlice.reducer;

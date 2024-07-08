import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryEntry, QueryState } from './types';
import * as actions from './actions';

const initialState: QueryState = {
  entries: [],
  filteredEntries: [],
  searchQuery:"" // Initial empty filtered entries
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actions.addQueryEntry, (state, action: PayloadAction<QueryEntry>) => {
        state.entries.push(action.payload);
        state.filteredEntries.push(action.payload);
      })
      .addCase(actions.filterQueryEntry, (state, action: PayloadAction<string>) => {
        state.filteredEntries = state.entries.filter((e)=>e.caseType.toLowerCase().includes(action.payload.toLowerCase()))
        console.log(state.filteredEntries);
      })
      .addCase(actions.setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
    //   .addCase(actions.saveFeedbackEntries, (state, action: PayloadAction<FeedbackEntry[]>) => {
    //     state.entries = action.payload;
    //   })
    //   .addCase(actions.initializeFeedbackEntriesFromLocalStorage, (state, action: PayloadAction<FeedbackEntry[]>) => {
    //     const storedEntries = localStorage.getItem('feedbackEntries');
    //     state.entries = storedEntries ? JSON.parse(storedEntries) : [];
    //   });
  },
});

export default querySlice.reducer;
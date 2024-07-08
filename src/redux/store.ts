import { configureStore } from '@reduxjs/toolkit';  
import querySlice from '../redux/query/reducer'; // Import your reducer(s)


const store = configureStore({
    reducer:querySlice,
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;
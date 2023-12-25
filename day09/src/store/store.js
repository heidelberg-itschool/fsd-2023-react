import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import cocktailsReducer from './cocktailsSlice';

const store = configureStore({
  reducer: {
    card: cardReducer,
    cocktails: cocktailsReducer
  }
});

export default store;
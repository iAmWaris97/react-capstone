import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Coins/coinsSlice';
import detailReducer from './Coins/coinSlice';

const store = configureStore({
  reducer: {
    coins: cryptoReducer,
    detail: detailReducer,
  },
});

export default store;

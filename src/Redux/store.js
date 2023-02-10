import { configureStore } from '@reduxjs/toolkit';
import { positionSlice } from './positionSlice';

export const store = configureStore({
    reducer: {
        position: positionSlice.reducer,
        // percent: percentSlice.reducer
    }
})
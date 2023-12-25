import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const previousProduct = state.find(product => product.idDrink === action.payload.idDrink);
            if (!previousProduct) {
                return [...state, {...action.payload, quantity: 1}];
            }
            previousProduct.quantity++;
            return state;
        }
    }
});

export const { add } = cardSlice.actions;

export default cardSlice.reducer;

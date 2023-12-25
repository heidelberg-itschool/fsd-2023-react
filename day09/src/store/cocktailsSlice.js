import { createSlice } from '@reduxjs/toolkit';

const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState: [],
    reducers: {
        getAll: (state, action) => {
            return action.payload;
        }
    }
});

export const { getAll } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;

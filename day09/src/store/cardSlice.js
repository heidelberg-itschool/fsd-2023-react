import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        add: state => {
            console.log(state);
            return state;
        }
    }
});

export default cardSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../actions/todo';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data?.todos;
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default todoSlice.reducer; 
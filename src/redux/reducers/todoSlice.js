import { createSlice, current } from '@reduxjs/toolkit';
import { getData } from '../actions/todo';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {
        setDeleteItem(state, action) {
            const index = current(state.data).indexOf(action.payload);
            if (index !== -1) {
                const newData = [...current(state.data).slice(0, index), ...current(state.data).slice(index + 1)];
                return {
                    ...state,
                    data: newData
                };
            }
            return state;
        }
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

export const { setDeleteItem } = todoSlice.actions

export default todoSlice.reducer; 
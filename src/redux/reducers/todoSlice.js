import { createSlice, current } from '@reduxjs/toolkit';
import { getData } from '../actions/todo';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
        page:1,
        perPage:10,
        total:150
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
        },
        setUpdatedItem(state, action) {
            const index = current(state.data).findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                let newData = [...current(state.data)]
                newData[index] = { ...newData[index], completed: action.payload.type }
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
            console.log(action.payload)
            state.isLoading = false;
            state.data = action.payload.res?.data?.todos;
            state.page = action.payload?.data?.page
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export const { setDeleteItem, setUpdatedItem } = todoSlice.actions

export default todoSlice.reducer; 
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { store } from '../store';

export const getData = createAsyncThunk("getData", async (data) => {
    try {
        let skip = (data?.page - 1) * data?.perPage
        const res = await api(`/todos?limit=${data?.perPage}&skip=${skip}`)
        return {res, data}
    } catch (err) {
        console.log(err)
    }
})
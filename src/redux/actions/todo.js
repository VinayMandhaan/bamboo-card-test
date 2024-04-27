import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getData = createAsyncThunk("getData", async () => {
    try {
        const res = await api('/todos')
        return res
    } catch (err) {
        console.log(err)
    }
});
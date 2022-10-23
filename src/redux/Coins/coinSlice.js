import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchDetail = createAsyncThunk('coins/Detail', async (id) => {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins/${id}`,
  );
  const detail = await response.json();
  const { coin } = detail;
  return coin;
});

const initialState = [];
const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = detailSlice;
export { actions, fetchDetail };
export default reducer;

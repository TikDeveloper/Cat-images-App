import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './sidebarAPI';

const initialState = {
  data: [],
  status: 'idle',
  loader: false,
  activeItem: null,
};

export const fetchSidebarCategories = createAsyncThunk(
  'sidebar/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response;
  },
);

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveItem(state, { payload }) {
      state.activeItem = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase('sidebar/fetchCategories/pending', (state) => {
        state.status = 'loading';
        state.loader = true;
      })
      .addCase('sidebar/fetchCategories/fulfilled', (state, { payload }) => {
        state.status = 'idle';
        state.data = payload;
        state.loader = false;
      });
  },
});

export const { setActiveItem } = sidebarSlice.actions;

export const selectAllCategories = (state) => state.sidebar.data;
export const selectLoaderStatus = (state) => state.sidebar.loader;
export const selectActiveItem = (state) => state.sidebar.activeItem;

export default sidebarSlice.reducer;

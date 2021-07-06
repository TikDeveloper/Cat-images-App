import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './galleryAPI';
import { setActiveItem } from '../sidebar/sidebarSlice';

const initialState = {
  data: [],
  status: 'idle',
  loader: false,
  page: 1,
};

export const fetchGalleryImages = createAsyncThunk(
  'gallery/fetchImages',
  async (obj, { dispatch }) => {
    await dispatch(setActiveItem(obj.cat_id));
    await dispatch(updatePage(1));
    const response = await fetchImages(obj);
    return response;
  },
);

export const fetchMoreImages = createAsyncThunk(
  'gallery/fetchMoreImages',
  async (obj, { dispatch, getState }) => {
    let currentPage = getState().gallery.page;
    currentPage++;

    await dispatch(updatePage(currentPage));
    obj = { ...obj, page: currentPage };
    const response = await fetchImages(obj);
    return response;
  },
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    updatePage(state, { payload }) {
      state.page = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase('gallery/fetchImages/pending', (state) => {
        state.status = 'loading';
        state.loader = true;
      })
      .addCase('gallery/fetchImages/fulfilled', (state, { payload }) => {
        state.status = 'idle';
        state.data = payload;
        state.loader = false;
      })
      .addCase('gallery/fetchMoreImages/pending', (state) => {
        state.status = 'loading';
        state.loader = true;
      })
      .addCase('gallery/fetchMoreImages/fulfilled', (state, { payload }) => {
        state.status = 'idle';
        state.data = [...state.data, ...payload];
        state.loader = false;
      });
  },
});

export const { updatePage } = gallerySlice.actions;

export default gallerySlice.reducer;

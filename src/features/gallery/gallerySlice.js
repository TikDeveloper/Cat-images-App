import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './galleryAPI';
import { setActiveItem } from '../sidebar/sidebarSlice';

const initialState = {
  data: [],
  status: 'idle',
  loader: false,
};

export const fetchGalleryImages = createAsyncThunk(
  'gallery/fetchImages',
  async (obj, { dispatch }) => {
    const response = await fetchImages(obj);
    await dispatch(setActiveItem(obj.cat_id));
    return response;
  },
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  //   reducers: {},

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
      });
  },
});

// export const {} = sidebarSlice.actions;

export default gallerySlice.reducer;

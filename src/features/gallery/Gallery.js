import React from 'react';
import './Gallery.scss';
import { useSelector } from 'react-redux';

import { selectActiveItem } from '../sidebar/sidebarSlice';
import Loader from '../loader/Loader';
import GalleryContent from './GalleryContent';

export default function Gallery() {
  const activeItem = useSelector(selectActiveItem);
  const images = useSelector((state) => state.gallery.data);
  const loading = useSelector((state) => state.gallery.loader);
  return (
    <>
      {activeItem ? (
        <div className='gallery-content'>
          {loading ? <Loader /> : <GalleryContent data={images} />}
        </div>
      ) : loading ? (
        <Loader />
      ) : null}
    </>
  );
}

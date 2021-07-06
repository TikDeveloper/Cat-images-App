import React from 'react';
import './Gallery.scss';
import { useSelector } from 'react-redux';

import { selectActiveItem } from '../sidebar/sidebarSlice';
import Loader from '../loader/Loader';

export default function Gallery() {
  const activeItem = useSelector(selectActiveItem);
  const images = useSelector((state) => state.gallery.data);
  const loading = useSelector((state) => state.gallery.loader);
  return (
    <div className='imgs-container'>
      {activeItem ? (
        loading ? (
          <Loader />
        ) : (
          images.map((item) => (
            <div key={item.id}>
              <img src={item.url} width='250px' height='250px' alt='img' />
            </div>
          ))
        )
      ) : loading ? (
        <Loader />
      ) : null}
      {}
    </div>
  );
}

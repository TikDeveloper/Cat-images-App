import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveItem } from '../sidebar/sidebarSlice';
import { fetchMoreImages } from './gallerySlice';

function GalleryContent({ data }) {
  const dispach = useDispatch();
  const activeItemId = useSelector(selectActiveItem);

  const handlerLoadMore = (e) => {
    dispach(fetchMoreImages({ limit: 10, cat_id: activeItemId }));
  };

  return (
    <>
      <div className='imgs-container'>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.url} width='250px' height='250px' alt='img' />
          </div>
        ))}
      </div>
      <div className='loadMore-container'>
        <button onClick={handlerLoadMore}>Load More</button>
      </div>
    </>
  );
}

export default React.memo(GalleryContent);

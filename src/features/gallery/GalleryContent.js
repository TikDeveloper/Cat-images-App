import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveItem } from '../sidebar/sidebarSlice';
import { fetchMoreImages } from './gallerySlice';
import Loader from '../loader/Loader';

const AsyncImage = ({ src, alt }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [src]);
  if (loadedSrc === src) {
    return <img src={src} width='250px' height='250px' alt={alt} />;
  }
  return <Loader />;
};

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
            <AsyncImage src={item.url} alt={'img'} />
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

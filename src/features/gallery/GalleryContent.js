import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveItem } from '../sidebar/sidebarSlice';
import { fetchMoreImages } from './gallerySlice';
import Loader from '../loader/Loader';

import { useTranslation } from 'react-i18next';

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

  const [t, i18n] = useTranslation('common');

  function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
  }

  const [isLogin, setIsLogin] = useState(
    getSessionStorageOrDefault('isLogin', '1111111'),
  );
  useEffect(() => {
    sessionStorage.removeItem('isLogin');
    // sessionStorage.setItem('isLogin', false);
  }, [isLogin]);
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
        <button onClick={handlerLoadMore}>{t('welcome.title')}</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
      </div>
    </>
  );
}

export default React.memo(GalleryContent);

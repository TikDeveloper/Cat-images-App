import React, { useEffect } from 'react';
import './Sidebar.scss';
import Loader from '../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGalleryImages } from '../gallery/gallerySlice';
import {
  fetchSidebarCategories,
  selectAllCategories,
  selectLoaderStatus,
  selectActiveItem,
} from './sidebarSlice';

export default function Sidebar() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoaderStatus);
  const data = useSelector(selectAllCategories);
  const activeItem = useSelector(selectActiveItem);
  useEffect(() => {
    dispatch(fetchSidebarCategories());
  }, [dispatch]);

  const handlerClickCategories = (e, cat_id) => {
    e.preventDefault();
    dispatch(fetchGalleryImages({ limit: 10, cat_id: cat_id, page: 1 }));
  };

  return (
    <nav>
      <h2>Categories</h2>
      <ul>
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => (
            <li
              key={item.id}
              className={activeItem === item.id ? `active` : ''}
            >
              <a
                href={item.name}
                onClick={(e) => handlerClickCategories(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}

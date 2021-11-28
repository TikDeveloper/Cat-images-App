import React from 'react';
// import { Counter } from '../features/counter/Counter';
import Sidebar from '../features/sidebar/Sidebar';
import Gallery from '../features/gallery/Gallery';
import Chart from '../features/chart/Chart';
import { selectActiveItem } from '../features/sidebar/sidebarSlice';
import { useSelector } from 'react-redux';
import './homePage.scss';
function HomePage() {
  const activeItem = useSelector(selectActiveItem);
  return (
    <div className='container'>
      <aside className='sidebar-container'>
        <Sidebar />
      </aside>
      <section className='gallery-container'>
        <h1>Gallery</h1>
        <Gallery />
        {!activeItem ? <Chart /> : null}
      </section>
    </div>
  );
}

export default HomePage;

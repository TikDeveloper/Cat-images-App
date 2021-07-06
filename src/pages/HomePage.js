import React from 'react';
// import { Counter } from '../features/counter/Counter';
import Sidebar from '../features/sidebar/Sidebar';
import Gallery from '../features/gallery/Gallery';
import './homePage.scss';
function HomePage() {
  return (
    <div className='container'>
      <aside className='sidebar-container'>
        <Sidebar />
      </aside>
      <section className='gallery-container'>
        <h1>Gallery</h1>
        <Gallery />
      </section>
    </div>
  );
}

export default HomePage;

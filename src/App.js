import { Suspense, lazy, useState, useEffect } from 'react';
import { SpinnerInfinity } from 'spinners-react';
import axios from 'axios';

import './App.css';
import Filter from './components/Filters';
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  const [images, setImages] = useState([]);
  const [queryFilter, setQueryFilter] = useState('elephant');
  const changeFilterHandler = (value) => {
    value !== null && setQueryFilter(value);
  };

  const URL = `https://api.unsplash.com/search/photos?query=${queryFilter}&per_page=35&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
  useEffect(() => {
    axios.get(URL).then((res) => setImages(res.data.results));
  }, [URL]);
  return (
    <>
      <h1 className="main-heading">My Image Gallery</h1>
      <Filter changeFilter={changeFilterHandler} currentFilter={queryFilter} />
      <Suspense
        fallback={
          <div className="loader">
            <SpinnerInfinity className="loader" />
          </div>
        }
      >
        <Gallery images={images} />
      </Suspense>
    </>
  );
}

export default App;

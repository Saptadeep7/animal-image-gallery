import { Suspense, lazy, useState, useEffect } from 'react';
import { SpinnerInfinity } from 'spinners-react';
import useSWR from 'swr';

import './App.css';
import Filter from './components/Filters';
const Gallery = lazy(() => import('./components/Gallery'));
const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((res) => res.results);

function App() {
  const [queryFilter, setQueryFilter] = useState('elephant');
  const changeFilterHandler = (value) => {
    value !== null && setQueryFilter(value);
  };

  const URL = `https://api.unsplash.com/search/photos?query=${queryFilter}&per_page=35&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
  const { data } = useSWR(URL, fetcher);
  useEffect(() => {}, [URL]);
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
        <Gallery images={data} />
      </Suspense>
    </>
  );
}

export default App;

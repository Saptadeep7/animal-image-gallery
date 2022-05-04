import { Suspense, lazy, useState } from 'react';
import { SpinnerInfinity } from 'spinners-react';

import './App.css';
import Filter from './components/Filters';
import { MAIN_HEADING, FILTER_OPTIONS } from './constants';
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  const [queryFilter, setQueryFilter] = useState(FILTER_OPTIONS[0].value);
  const changeFilterHandler = (value) => {
    value && value !== null && setQueryFilter(value);
  };
  return (
    <>
      <h1 className="main-heading">{MAIN_HEADING}</h1>
      <Filter changeFilter={changeFilterHandler} currentFilter={queryFilter} />
      <Suspense
        fallback={
          <div className="loader">
            <SpinnerInfinity className="loader" />
          </div>
        }
      >
        <Gallery queryFilter={queryFilter} />
      </Suspense>
    </>
  );
}

export default App;

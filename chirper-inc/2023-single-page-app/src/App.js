import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {MoonLoader} from 'react-spinners';

const Classic = React.lazy(() => import('./pages/ClassicChirper'));
const Free = React.lazy(() => import('./pages/FreeChirp'));

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Classic</Link>
        <Link to="free">FreeChirp</Link>
      </header>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<MoonLoader/>}>
              <Classic />
            </React.Suspense>
          }
        />
        <Route
          path="free"
          element={
            <React.Suspense fallback={<MoonLoader/>}>
              <Free />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};
export default App;
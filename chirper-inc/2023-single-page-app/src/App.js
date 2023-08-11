import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {MoonLoader} from 'react-spinners';

const Classic = React.lazy(() => import('./pages/ClassicChirper'));
const Free = React.lazy(() => import('./pages/FreeChirp'));

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <div>
        <Link to="/">Classic</Link>
        <Link to="/free">Free Chirp</Link>
      </div>

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
    </div>
    </BrowserRouter>
  );
};
export default App;
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {MoonSpinner} from 'react-spinners'
import {configureStore} from '@reduxjs/toolkit'
const Counter = React.lazy(() => dynamicFederation('count', './Counter'));

store = configureStore({reducer: {'count': slice.reducer}})

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Counter: The App
        <div>
          <Suspense fallback={<MoonSpinner/>}>
            <Counter store={store} />
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

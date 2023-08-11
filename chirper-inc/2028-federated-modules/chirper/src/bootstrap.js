import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BirdIcon from '@mui/icons-material/LabelImportant';
import Button from './Button'
import { store } from './store';

const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
};

const Counter = React.lazy(() => dynamicFederation('count', './Counter'));
const Chirps = React.lazy(() => dynamicFederation('chirper', './Chirps'));

const App = () => {
  return (
    <Provider store={store}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="bird"
            sx={{ mr: 2 }}
          >
            <BirdIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Chirper Plus
          </Typography>

          <Button>Nothing Happens</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Box>
          <Suspense fallback="Loading...">
            <Chirper store={store} />
            <Counter store={store} />
          </Suspense>
        </Box>
      </Box>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

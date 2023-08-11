import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import chirpSlice from './store';


const Button = React.lazy(() => import('chirper/Button'));

const Chirper = () => {
  const dispatch = useDispatch();
  const chirps = useSelector(state => state.chirps);
  const [input, setInput] = useState('');
  return (
    <div style={{ marginTop: '10px' }}>
      <div>Chirper</div>
      <TextField id="outlined-basic" label="Cirp" variant="outlined" value={input} onChange={(event) => {
    setInput(event.target.value);
  }}/>
      <React.Suspense fallback={<MoonLoader/>}>
        <Button onClick={() => dispatch(chirpSlice.actions.add())} size="large">
          Add Chirp
        </Button>
        </React.Suspense>
      <div>Recent Chirps</div>
      {chirps.array.forEach(chirp => {
        return <div>{chirp}</div>
      })}
    </div>
  );
};

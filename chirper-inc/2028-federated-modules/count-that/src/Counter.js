import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import slice from './reducer';


const Button = React.lazy(() => import('chirper/Button'));

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const lastChirp = useSelector(state => state?.chirps[0] )
  const [remoteAppInput, setRemoteAppInput] = useState('');

  return (
    <div style={{ marginTop: '10px' }}>
      <div>Counter</div>
      <div>CurrentCount : {count}</div>

      <div>Last Chirp : {count}</div>
      <div>
        <input
          style={{ marginRight: '10px' }}
          type="text"
          onChange={e => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <React.Suspense fallback={<MoonLoader/>}>
        <Button onClick={() => dispatch(slice.actions.incr())}>
          Add
        </Button>
        </React.Suspense>
      </div>
    </div>
  );
};

const RemoteAppWrapper = props => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;

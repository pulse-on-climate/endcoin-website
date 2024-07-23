import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import {
  fetchProgramBalanceAsync,
  fetchStaticDataPointsAsync,
} from './features/program/program-slice';

import Landing from './features/landing/landing';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStaticDataPointsAsync());
    // dispatch(fetchProgramBalanceAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {' '}
        <Landing />
      </div>
    </>
  );
}

export default App;

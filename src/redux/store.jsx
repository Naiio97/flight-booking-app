import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers';

import mockData from '../mock.json';
import { setFlights } from '../redux/actions';

const store = configureStore({
  reducer: allReducers,
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
});

store.dispatch(setFlights(mockData));


export default store;

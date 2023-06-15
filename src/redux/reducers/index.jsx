import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import searchedFlightsReducer from './searchedFlightsReducer';
import searchFromReducer from './searchFromReducer';
import searchToReducer from './searchToReducer';
import searchDateReducer from './searchDateReducer';
import searchCountPassengersReducer from './searchCountPassengersReducer';
import passengersReducer from './passengersReducer';
import setMessageReducer from './setMessageReducer';

const allReducers = combineReducers({
  flights: flightsReducer,
  searchedFlights: searchedFlightsReducer,
  searchFrom: searchFromReducer,
  searchTo: searchToReducer,
  searchDate: searchDateReducer,
  searchCountPassengers: searchCountPassengersReducer,
  passengers: passengersReducer,
  setMessage: setMessageReducer,
});

export default allReducers;

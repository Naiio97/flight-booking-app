import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import searchedFlightsReducer from './searchedFlightsReducer';
import searchFromReducer from './searchFromReducer';
import searchToReducer from './searchToReducer';
import searchDateReducer from './searchDateReducer';
import searchPassengersReducer from './searchPassengersReducer';
import passangersReducer from './passangersReducer';


const allReducers = combineReducers({
  flights: flightsReducer,
  searchedFlights: searchedFlightsReducer,
  searchFrom: searchFromReducer,
  searchTo: searchToReducer,
  searchDate: searchDateReducer,
  searchPassengers: searchPassengersReducer,
  passangers: passangersReducer,
  
});

export default allReducers;
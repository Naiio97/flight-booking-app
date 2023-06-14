import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import searchedFlightsReducer from './searchedFlightsReducer';
import searchFromReducer from './searchFromReducer';
import searchToReducer from './searchToReducer';
import passangersReducer from './passangersReducer';


const allReducers = combineReducers({
  flights: flightsReducer,
  searchedFlights: searchedFlightsReducer,
  searchFrom: searchFromReducer,
  searchTo: searchToReducer,
  passangers: passangersReducer,
  
});

export default allReducers;
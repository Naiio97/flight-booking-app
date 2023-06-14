import { useSelector, useDispatch } from 'react-redux';
import { setSearchFrom, setSearchTo } from '../redux/actions';
import { setSearchedFlights } from '../redux/actions';
import TextField from '@mui/material/TextField';

import '../styles/SearchWindow.css';

const SearchWindow = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const searchFrom = useSelector((state) => state.searchFrom);
  const searchTo = useSelector((state) => state.searchTo);



  const searchFlight = (e) => {
    e.preventDefault();

    let searchedFlight = flights.filter((flight) => {
      if (!searchFrom && !searchTo) {
        return false;
      }

      if (searchFrom && searchTo) {
        return (
          flight.from.toLowerCase().includes(searchFrom.toLowerCase()) &&
          flight.to.toLowerCase().includes(searchTo.toLowerCase())
        );
      }

      if (searchFrom && !searchTo) {
        return flight.from.includes(searchFrom);
      }

      if (!searchFrom && searchTo) {
        return flight.to.includes(searchTo);
      }

      return false;
    });

    dispatch(setSearchedFlights(searchedFlight));
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={searchFlight} className="search-box">
          <TextField
            style={{ marginRight: 20 }}
            id="from-input"
            label="Odkud"
            onChange={(e) => {
              dispatch(setSearchFrom(e.target.value));
            }}
          />
          <TextField
            style={{ marginRight: 20 }}
            className="input"
            id="to-input"
            label="Kam"
            onChange={(e) => {
              dispatch(setSearchTo(e.target.value));
            }}
          />
          <button>Vyhledat</button>
        </form>
      </div>
    </>
  );
};

export default SearchWindow;

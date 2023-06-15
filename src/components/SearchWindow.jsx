import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import moment from 'moment';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import {
  setSearchedFlights,
  setSearchFrom,
  setSearchTo,
  setSearchDate,
  setSearchCountPassengers,
  setMessage,
} from '../redux/actions';

import '../styles/SearchWindow.css';

const SearchWindow = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const searchFrom = useSelector((state) => state.searchFrom);
  const searchTo = useSelector((state) => state.searchTo);
  const searchDate = useSelector((state) => state.searchDate);
  const searchCountPassengers = useSelector(
    (state) => state.searchCountPassengers
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchFlight = () => {
    const formattedDate = moment(searchDate, 'D.M.YYYY').format('YYYY-MM-DD');

    let searchedFlight = flights.filter((flight) => {
      if (flight.length > 0) {
        dispatch(setSearchedFlights(searchedFlight));
      }

      const availableSeats = flight.seats.filter(
        (seat) => seat.available
      ).length;

      if (!searchFrom && !searchTo && !searchDate && !searchCountPassengers) {
        return false;
      }

      if (searchFrom && searchTo && searchDate && searchCountPassengers) {
        return (
          flight.from.includes(searchFrom) &&
          flight.to.includes(searchTo) &&
          flight.departure.includes(formattedDate) &&
          availableSeats >= searchCountPassengers
        );
      }

      if (searchFrom && searchCountPassengers && searchDate) {
        return (
          flight.from.includes(searchFrom) &&
          availableSeats >= searchCountPassengers &&
          flight.departure.includes(formattedDate)
        );
      }

      if (searchTo && searchCountPassengers && searchDate) {
        return (
          flight.to.includes(searchTo) &&
          availableSeats >= searchCountPassengers &&
          flight.departure.includes(formattedDate)
        );
      }

      if (searchFrom && searchTo) {
        return flight.from.includes(searchFrom) && flight.to.includes(searchTo);
      }

      if (searchFrom && searchCountPassengers) {
        return (
          flight.from.includes(searchFrom) &&
          availableSeats >= searchCountPassengers
        );
      }

      if (searchTo && searchCountPassengers) {
        return (
          flight.to.includes(searchTo) &&
          availableSeats >= searchCountPassengers
        );
      }

      if (searchFrom && searchDate) {
        return (
          flight.from.includes(searchFrom) &&
          flight.departure.includes(formattedDate)
        );
      }

      if (searchTo && searchDate) {
        return (
          flight.from.includes(searchTo) &&
          flight.departure.includes(formattedDate)
        );
      }

      if (searchDate && !searchFrom && !searchTo) {
        return flight.departure.includes(formattedDate);
      }

      if (searchFrom && !searchTo && !searchDate) {
        return flight.from.includes(searchFrom);
      }

      if (!searchFrom && !searchDate && searchTo) {
        return flight.to.includes(searchTo);
      }

      if (searchDate && !searchFrom && !searchTo) {
        return flight.departure.includes(formattedDate);
      }

      dispatch(setMessage('Nemůžeme nic najít'));
      return false;
    });

    if (!searchedFlight.length > 0) {
      dispatch(setMessage('Nenalezen žádný let.'));
      dispatch(setSearchedFlights([]));
    } else {
      dispatch(setSearchedFlights(searchedFlight));
      dispatch(setMessage(''));
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit(searchFlight)} className="search-box">
        <TextField
          style={{ marginRight: 20 }}
          id="from-input"
          name="from"
          label="Odkud"
          {...register('from', { required: 'Zadejte odkud chcete letět.' })}
          error={Boolean(errors.from)}
          helperText={errors.from?.message}
          onChange={(e) => {
            dispatch(
              setSearchFrom(e.target.value !== '' ? e.target.value : false)
            );
          }}
        />
        <TextField
          style={{ marginRight: 20 }}
          id="to-input"
          name="to"
          label="Kam"
          // {...register('to', { required: 'Zadejte kam chcete letět.' })}
          // error={Boolean(errors.from)}
          // helperText={errors.from?.message}
          onChange={(e) => {
            dispatch(
              setSearchTo(e.target.value !== '' ? e.target.value : false)
            );
          }}
        />
        <TextField
          style={{ marginRight: 20 }}
          id="date-input"
          name="date"
          label="Odlet"
          {...register('date', {
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
              message: 'Zadejte datum ve formátu dd.mm.yyyy',
            },
          })}
          error={Boolean(errors.date)}
          helperText={errors.date?.message}
          onChange={(e) => {
            dispatch(
              setSearchDate(e.target.value !== '' ? e.target.value : false)
            );
          }}
        />
        <TextField
          style={{ marginRight: 20, width: 80, textAlign: 'center' }}
          disabled={searchFrom || searchTo ? false : true}
          id="date-input"
          select
          label="Cestující"
          defaultValue={1}
          onChange={(e) => {
            dispatch(setSearchCountPassengers(e.target.value));
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </TextField>

        <Button type="submit" className="btn-search" variant="contained">
          Vyhledat
        </Button>
      </form>
    </div>
  );
};

export default SearchWindow;

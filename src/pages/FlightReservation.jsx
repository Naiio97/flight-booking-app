import '../../src/styles/flightReservation.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FlightInfo from '../components/FlightInfo';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPassengers } from '../redux/actions';
import PropTypes from 'prop-types';

const FlightReservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const parsedId = parseInt(id);

  const flights = useSelector((state) => state.flights);
  const seats = flights[id - 1].seats;

  const handleChange = (field, value) => {
    dispatch(setPassengers({ [field]: value }));
  };

  const confirmReservation = (e) => {
    e.preventDefault();
    navigate(`/bookingSummary/${id}`);
  };

  return (
    <div className="detail-container">
      <div className="flight-detail">
        <div className="header">
          <div style={{ display: 'flex' }}>
            <h1 style={{ fontSize: 30 }}>Your trip to {flights[id - 1].to} </h1>
          </div>
          <div>
            <p style={{ fontSize: 18 }}>
              Total price
              <br />
              <b>EUR {flights[id - 1].price}</b>
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'relative', gap: 30 }}>
          <FlightInfo
            id={parsedId}
            to={flights[id - 1].to}
            from={flights[id - 1].from}
            duration={flights[id - 1].duration}
            departure={flights[id - 1].departure}
            arrival={flights[id - 1].arrival}
          />
        </div>
      </div>
      <div className="passanger-detail">
        <div className="header-form">
          <h2>Passanger</h2>
          <Button className="btn-add-person" variant="contained">
            + Přida další osobu
          </Button>
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '26ch' },
          }}
          onSubmit={confirmReservation}
        >
          <div>
            <TextField
              className="input"
              id="first-name"
              label="Jmeno"
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
            <TextField
              className="input"
              id="sure-name"
              label="Příjmení"
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
            <TextField
              className="input"
              id="email"
              label="Email"
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <TextField
              id="gender"
              select
              label="Pohlaví"
              defaultValue=""
              onChange={(e) => handleChange('gender', e.target.value)}
            >
              <MenuItem value={'Muž'}>Můž</MenuItem>
              <MenuItem value={'Žena'}>Žena</MenuItem>
            </TextField>
            <TextField
              id="seat"
              select
              label="Sedadlo"
              defaultValue=""
              onChange={(e) => handleChange('seat', e.target.value)}
            >
              {seats.map((seat) =>
                seat.available ? (
                  <MenuItem key={seat.id} value={seat.number}>
                    {seat.number}
                  </MenuItem>
                ) : null
              )}
            </TextField>
          </div>
          <Button type="submit" className="btn-reservation" variant="contained">
            Rezervovat
          </Button>
        </Box>
      </div>
    </div>
  );
};

FlightInfo.propTypes = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default FlightReservation;

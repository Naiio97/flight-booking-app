import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPassengers } from '../redux/actions';
import { useForm } from 'react-hook-form';
import FlightInfo from '../components/FlightInfo';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import '../../src/styles/flightReservation.css';

const FlightReservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const parsedId = parseInt(id);
  const flights = useSelector((state) => state.flights);
  const seats = flights[id - 1].seats;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passengerList, setPassengersList] = useState([
    { id: 1, firstName: '', lastName: '', email: '', gender: '', seat: '' },
  ]);

  const handleChange = (id, field, value) => {
    const updatedList = passengerList.map((passenger) => {
      if (passenger.id === id) {
        return { ...passenger, [field]: value };
      }
      return passenger;
    });
    setPassengersList(updatedList);
  };

  const handleAddPassenger = () => {
    const newPassengerId = passengerList.length + 1;
    const newPassenger = {
      id: newPassengerId,
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      seat: '',
    };
    setPassengersList([...passengerList, newPassenger]);
  };
  const confirmReservation = () => {
    dispatch(setPassengers(passengerList));
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
          <Button
            className="btn-add-person"
            variant="contained"
            onClick={handleAddPassenger}
          >
            + Přida další osobu
          </Button>
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '26ch' },
          }}
          onSubmit={handleSubmit(confirmReservation)}
        >
          {passengerList.map((passenger, index) => (
            <div style={{ marginBottom: 10 }} key={index}>
              <h2 style={{ marginLeft: 7, marginBottom: 20 }}>
                Passanger {passenger.id}
              </h2>
              <TextField
                id={`first-name-${passenger.id}`}
                name={`firstName-${passenger.id}`}
                label="Jmeno"
                {...register(`firstName-${passenger.id}`, {
                  required: 'Toto pole je povinné.',
                })}
                error={Boolean(errors[`firstName-${passenger.id}`])}
                helperText={errors[`firstName-${passenger.id}`]?.message}
                onChange={(e) =>
                  handleChange(passenger.id, 'firstName', e.target.value)
                }
              />
              <TextField
                id={`last-name-${passenger.id}`}
                name={`lastName-${passenger.id}`}
                label="Příjmení"
                {...register(`lastName-${passenger.id}`, {
                  required: 'Toto pole je povinné.',
                })}
                error={Boolean(errors[`lastName-${passenger.id}`])}
                helperText={errors[`lastName-${passenger.id}`]?.message}
                onChange={(e) =>
                  handleChange(passenger.id, 'lastName', e.target.value)
                }
              />
              <TextField
                id={`email-${passenger.id}`}
                name={`email-${passenger.id}`}
                label="Email"
                {...register(`email-${passenger.id}`, {
                  required: 'Toto pole je povinné.',
                })}
                error={Boolean(errors[`email-${passenger.id}`])}
                helperText={errors[`email-${passenger.id}`]?.message}
                onChange={(e) =>
                  handleChange(passenger.id, 'email', e.target.value)
                }
              />
              <TextField
                id={`gender-${passenger.id}`}
                select
                label="Pohlaví"
                defaultValue=""
                onChange={(e) =>
                  handleChange(passenger.id, 'gender', e.target.value)
                }
              >
                <MenuItem value={'Muž'}>Můž</MenuItem>
                <MenuItem value={'Žena'}>Žena</MenuItem>
              </TextField>
              <TextField
                id={`seat-${passenger.id}`}
                select
                label="Sedadlo"
                defaultValue=""
                {...register(`seat-${passenger.id}`, {
                  required: 'Toto pole je povinné.',
                })}
                error={Boolean(errors[`seat-${passenger.id}`])}
                helperText={errors[`seat-${passenger.id}`]?.message}
                onChange={(e) =>
                  handleChange(passenger.id, 'seat', e.target.value)
                }
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
          ))}

          <Button type="submit" className="btn-reservation" variant="contained">
            Rezervovat
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default FlightReservation;

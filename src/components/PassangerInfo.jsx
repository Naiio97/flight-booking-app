import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import '../styles/passengerInfo.css';

const PassengerInfo = () => {
  const passengers = useSelector((state) => state.passengers);

  return (
    <div className="summary-passengers">
      {passengers.map((passenger, index) => (
        <div key={index} className="passenger">
          <h2 style={{ fontSize: 20, marginTop: 10, marginBottom: 5 }}>
            Passenger {index + 1}
          </h2>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 20 }}
            >
              <Grid item xs={4}>
                <i>Jméno</i>
                <p>
                  <b>{passenger.firstName}</b>
                </p>
              </Grid>
              <Grid item xs={4}>
                <i>Příjmení</i>
                <p>
                  <b>{passenger.lastName}</b>
                </p>
              </Grid>
              <Grid item xs={4}>
                <i>Pohlaví</i>
                <p>
                  <b>{passenger.gender}</b>
                </p>
              </Grid>
              <Grid item xs={4}>
                <i>Email</i>
                <p>
                  <b>{passenger.email}</b>
                </p>
              </Grid>
              <Grid item xs={4}>
                <i>Sedadlo</i>
                <p>
                  <b>{passenger.seat}</b>
                </p>
              </Grid>
            </Grid>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default PassengerInfo;

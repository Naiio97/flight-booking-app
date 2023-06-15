import '../styles/passengerInfo.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

const PassengerInfo = () => {

  const passangers = useSelector((state) => state.passangers);
  console.log(passangers);
  return (
    <div className="summary-passangers">
      <h2 style={{ fontSize: 20 }}>Passenger 1</h2>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <i>Jméno</i>
            <p>{passangers.firstName}</p>
          </Grid>
          <Grid item xs={4}>
            <i>Příjmení</i>
            <p>{passangers.lastName}</p>
          </Grid>
          <Grid item xs={4}>
            <i>Pohlaví</i>
            <p>{passangers.gender}</p>
          </Grid>
          <Grid item xs={4}>
            <i>Email</i>
            <p>{passangers.email}</p>
          </Grid>
          <Grid item xs={4}>
            <i>Sedadlo</i>
            <p>{passangers.seat}</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PassengerInfo
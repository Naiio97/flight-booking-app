import '../styles/passengerInfo.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';





const PassengerInfo = () => {
  return (
    <div className="summary-passangers">
      <h2 style={{ fontSize: 20 }}>Passenger 1</h2>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <i>Jméno</i>
            <p>Nicolas</p>
          </Grid>
          <Grid item xs={4}>
            <i>Příjmení</i>
            <p>Bureš</p>
          </Grid>
          <Grid item xs={4}>
            <i>Pohlaví</i>
            <p>Můž</p>
          </Grid>
          <Grid item xs={4}>
            <i>Email</i>
            <p>djias@fsfa.cz</p>
          </Grid>
          <Grid item xs={4}>
            <i>Sedadlo</i>
            <p>A1</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PassengerInfo
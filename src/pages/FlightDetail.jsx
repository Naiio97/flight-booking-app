import '../../src/styles/flightDetail.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FlightInfo from '../components/FlightInfo';

const FlightDetail = () => {
  return (
    <div className="detail-container">
      <div className="flight-detail">
        <div className="header">
          <div style={{ display: 'flex' }}>
            <h1>Your trip to Paris</h1>
          </div>
          <div>
            <p style={{ fontSize: 18 }}>
              Total price
              <br />
              <b>Kč 2000</b>
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'relative', gap: 30 }}>
          <FlightInfo />
        </div>
      </div>
      <div className="passanger-detail">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '26ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField className="input" id="first-name" label="Jmeno" />
            <TextField className="input" id="sure-name" label="Příjmení" />
            <TextField className="input" id="email" label="Email" />
            <TextField id="gender" select label="Pohlaví">
              <MenuItem value={'Muž'}>Můž</MenuItem>
              <MenuItem value={'Žena'}>Žena</MenuItem>
            </TextField>
            <TextField id="seat" select label="Sedadlo">
              <MenuItem value={0}>A1</MenuItem>
              <MenuItem value={1}>A2</MenuItem>
              <MenuItem value={2}>B1</MenuItem>
              <MenuItem value={3}>B2</MenuItem>
            </TextField>
            <Button className="btn-add-person" variant="contained">
              + Přida další osobu
            </Button>
          </div>
          <Button className="btn-reservation" variant="contained">
            Rezervovat
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default FlightDetail
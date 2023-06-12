import '../../src/styles/flightDetail.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FlightIcon from '@mui/icons-material/Flight';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const FlightDetail = () => {
  return (
    <div className="detail-container">
      <div className="flight-detail">
        <div className="header">
          <div style={{ display: 'flex' }}>
            <h1>Your trip to Paris</h1>
            <FlightIcon style={{ marginTop: 8 }} />
          </div>
          <div>
            <p>
              Total price
              <br />
              <b>Kč 2000</b>
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'relative', gap: 30 }}>
          <div className="detail-departure">
            <p>27.9.</p>
            <p>Praha</p>
          </div>
          <div style={{ display: 'flex' }}>
            <p>2h</p>
            <TrendingFlatIcon className="detail-arrow" />
          </div>
          <div className="arive-departure">
            <p>27.9.</p>
            <p>Paris</p>
          </div>
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
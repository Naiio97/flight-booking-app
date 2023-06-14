import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import moment from 'moment';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/flightInfo.css';

const FlightInfo = ({ id, to, from, departure, arrival, duration }) => {
const dateDeparture = moment(departure).format('DD.MM.YYYY');
const timeDeparture = moment(departure).format('HH:MM');
const dateArrival = moment(arrival).format('DD.MM.YYYY');
const timeArrival = moment(arrival).format('HH:MM');

  return (
    <div>
      <div key={id} className="flight-details">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={5}>
              <div className="detail-departure">
                <p>{dateDeparture}</p>
                <p>
                  {timeDeparture} {from}
                </p>
              </div>
            </Grid>
            <Grid item xs={1}>
              <div className='detail-duration' style={{ display: 'flex' }}>
                <p>{duration}</p>
                <TrendingFlatIcon className="detail-arrow" />
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className="detail-arrive">
                <p>{dateArrival}</p>
                <p>
                  {timeArrival} {to}
                </p>
              </div>
            </Grid>
          </Grid>
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

export default FlightInfo;

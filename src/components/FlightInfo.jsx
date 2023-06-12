import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import '../styles/flightInfo.css'


const FlightInfo = () => {
  return (
    <div>
      <div className="flight-details">
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
  );
};

export default FlightInfo;

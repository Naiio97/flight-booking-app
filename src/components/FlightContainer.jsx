import { useNavigate } from 'react-router-dom';

import AirlinesIcon from '@mui/icons-material/Airlines';
import '../styles/flightContainer.css';
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const FlightContainer = () => {
     const navigate = useNavigate();

const hendleDetailFlight = () => {
    console.log('aaa');
  navigate('/flightDetail');
};
 
  return (
    <>
      <div className="flight-container">
        <div className="flight">
          <div className="flight-info">
            <AirlinesIcon className="arline" />
            <div className="flight-from">
              <p>27.9.</p>
              <p>Praha</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ marginTop: -18 }}>2h</p>
              <TrendingFlatIcon className="arrow" />
            </div>
            <div className="flight-to">
              <p>27.9.</p>
              <p>Paříž</p>
            </div>
          </div>
          <div className="flight-price">
            <p className="price">2000 Kč</p>
              <Button onClick={() => hendleDetailFlight()} className="btn-choose" variant="contained">
                Vybrat
              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightContainer;

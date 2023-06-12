import { useNavigate } from 'react-router-dom';
import FlightInfo from '../components/FlightInfo';
import AirlinesIcon from '@mui/icons-material/Airlines';
import '../styles/flightContainer.css';
import Button from '@mui/material/Button';


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
            <FlightInfo />
          </div>
          <div className="flight-price">
            <p className="price">2000 Kč</p>
            <Button
              onClick={() => hendleDetailFlight()}
              className="btn-choose"
              variant="contained"
            >
              Vybrat
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightContainer;

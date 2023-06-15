import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlightInfo from '../components/FlightInfo';

import Button from '@mui/material/Button';
import AirlinesIcon from '@mui/icons-material/Airlines';

import '../styles/flightContainer.css';

const FlightContainer = () => {
  const navigate = useNavigate();
  const searchedFlights = useSelector((state) => state.searchedFlights);
  const notFound = useSelector((state) => state.setMessage);

const handleChooseFlight = (id) => {
  navigate(`/flightReservation/${id}`);
};
  return (
    <>
      <div className="flight-container">
        {notFound && <div className="not-found">{notFound}</div>}

        {searchedFlights &&
          searchedFlights.map((flight) => (
            <div key={flight.id} className="flight">
              <div className="flight-info">
                <AirlinesIcon className="arline" />
                <FlightInfo
                  id={flight.id}
                  to={flight.to}
                  from={flight.from}
                  duration={flight.duration}
                  departure={flight.departure}
                  arrival={flight.arrival}
                />
              </div>
              <div className="flight-price">
                <p className="price">2000 Kč</p>
                <Button
                  variant="contained"
                  onClick={() => handleChooseFlight(flight.id)}
                >
                  Vybrat
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FlightContainer;

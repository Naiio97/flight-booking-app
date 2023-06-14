import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlightInfo from '../components/FlightInfo';
import AirlinesIcon from '@mui/icons-material/Airlines';
import '../styles/flightContainer.css';

const FlightContainer = () => {
  const searchedFlights = useSelector((state) => state.searchedFlights);
 
  
  return (
    <>
      <div className="flight-container">
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
                <Link className="btn-choose" to={`/flightDetail/${flight.id}`}>
                  Vybrat
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FlightContainer;

import FlightInfo from '../components/FlightInfo';
import PassangerInfo from '../components/PassangerInfo';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/bookingSummary.css';

const BookingSummary = () => {
const { id } = useParams();
const parsedId = parseInt(id);
const flights = useSelector((state) => state.flights);  



  return (
    <div className="summary-container">
      <div className="booking-summary">
        <h1 style={{ marginBottom: 30 }}>Summary of your booking</h1>
        <div className="summary-flight-price">
          <FlightInfo
            id={parsedId}
            to={flights[id - 1].to}
            from={flights[id - 1].from}
            duration={flights[id - 1].duration}
            departure={flights[id - 1].departure}
            arrival={flights[id - 1].arrival}
          />
          <p style={{ fontSize: 18 }}>
            Total price
            <br />
            <b>Kč 2000</b>
          </p>
        </div>
        <div className="summary-passangers">
          <PassangerInfo />
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

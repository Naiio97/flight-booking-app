import FlightInfo from '../components/FlightInfo';
import PassangerInfo from '../components/PassangerInfo';
import '../styles/bookingSummary.css';

const BookingSummary = () => {
  return (
    <div className="summary-container">
      <div className="booking-summary">
        <h1 style={{ marginBottom: 30 }}>Summary of your booking</h1>
        <div className="summary-flight-price">
          <FlightInfo />
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

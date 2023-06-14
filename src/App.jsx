import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchPage from '../src/pages/SearchPage';
import FlightReservation from '../src/pages/FlightReservation';
import BookingSummary from '../src/pages/BookingSummary';

import '../src/styles/App.css'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/flightReservation/:id" element={<FlightReservation />} />
            <Route path="/bookingSummary/:id" element={<BookingSummary />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;

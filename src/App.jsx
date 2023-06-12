import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchPage from '../src/pages/SearchPage';
import FlightDetail from '../src/pages/FlightDetail';
import BookingSummary from '../src/pages/BookingSummary';
import '../src/styles/App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/flightDetail" element={<FlightDetail />} />
          <Route path="/bookingSummary" element={<BookingSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

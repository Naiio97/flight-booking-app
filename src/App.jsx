import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchPage from '../src/pages/SearchPage';
import FlightDetail from '../src/pages/FlightDetail';
import '../src/styles/App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/flightDetail" element={<FlightDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

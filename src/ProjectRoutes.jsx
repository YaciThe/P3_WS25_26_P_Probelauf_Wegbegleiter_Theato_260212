import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Karte } from './components/Karte.jsx';

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Startseite */}
        <Route path="/karte" element={<Karte />} />
      </Routes>
    </BrowserRouter>
  );
}
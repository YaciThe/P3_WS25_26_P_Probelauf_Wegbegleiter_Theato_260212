import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './ProjectRoutes.css';

import { Home } from './pages/Home';
import { Karte } from './pages/Karte';
import { Anfrage } from './pages/Anfrage';
import { Hilfe } from './pages/Hilfe';
import { Notfallkontakte } from './pages/Notfallkontakte';

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karte" element={<Karte />} />
          <Route path="/anfrage" element={<Anfrage />} />
          <Route path="/hilfe" element={<Hilfe />} />
          <Route path="/notfallkontakte" element={<Notfallkontakte />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

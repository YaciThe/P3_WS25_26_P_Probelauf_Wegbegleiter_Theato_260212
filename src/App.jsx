import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Karte } from './pages/Karte';
import { Anfrage } from './pages/Anfrage';
import { Hilfe } from './pages/Hilfe';
import { Notfallkontakte } from './pages/Notfallkontakte';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/karte" element={<Karte />} />
      <Route path="/anfrage" element={<Anfrage />} />
      <Route path="/hilfe" element={<Hilfe />} />
      <Route path="/notfallkontakte" element={<Notfallkontakte />} />
    </Routes>
  );
}


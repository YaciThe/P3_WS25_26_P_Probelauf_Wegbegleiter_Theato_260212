
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './ProjectRoutes.css';


import { Home } from './pages/Home';
import { Karte } from './pages/Karte';
import { Anfrage } from './pages/Anfrage';

import { Hilfe } from './pages/Hilfe';
import { Notfallkontakte } from './pages/Notfallkontakte';

import { NeueAnfrage } from './pages/NeueAnfrage';
import AlteAnfragen from './pages/AlteAnfragen';


function AppShell({ children }) {
  return <div className="app-shell">{children}</div>;
}

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karte" element={<Karte />} />
          <Route path="/anfrage" element={<Anfrage />} />
          <Route path="/hilfe" element={<Hilfe />} />
          <Route path="/notfallkontakte" element={<Notfallkontakte />} />
          <Route path="/neue-anfrage" element={<NeueAnfrage />} />
          <Route path="/alte-anfrage" element={<AlteAnfragen />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

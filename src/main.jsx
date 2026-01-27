import { StrictMode } from 'react';
import 'leaflet/dist/leaflet.css';
import { createRoot } from 'react-dom/client';
import './App.css';
import './index.css';
import { ProjectRoutes } from './ProjectRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectRoutes />
  </StrictMode>
);
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Karte.css'
import { useState } from 'react';

export function Karte() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="karte-wrapper">
      <div className="karte-toggle-switch" onClick={() => setToggle(t => !t)} aria-pressed={toggle} tabIndex={0} role="button">
        <div className={`toggle-track${toggle ? ' toggle-on' : ''}`}>
          <div className="toggle-circle" />
        </div>
      </div>
      <MapContainer center={[49.90187911322085, 8.855138539832907]} zoom={13} className="karte-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.90187911322085, 8.855138539832907]}>
          <Popup>Hochschule Darmstadt Mediencampus</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

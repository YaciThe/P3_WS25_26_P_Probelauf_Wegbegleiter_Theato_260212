import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Karte.css";

import Header from '../components/Header';
import RoutingControl from './RoutingControl';
import { useState } from 'react';

export function Karte() {
  const [toggle, setToggle] = useState(false);
  // Startpunkt: 49.91647742171149, 8.85318805505878
  // Zielpunkt: 49.90187911322085, 8.855138539832907
  const start = [49.91647742171149, 8.85318805505878];
  const ziel = [49.90187911322085, 8.855138539832907];
  return (
    <div className="karte-wrapper">
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="karte-map-container">
        <MapContainer
          center={ziel}
          zoom={13}
          className="karte-map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={ziel}>
            <Popup>Hochschule Darmstadt Mediencampus</Popup>
          </Marker>
          {toggle && <RoutingControl from={start} to={ziel} />}
        </MapContainer>
        {toggle && (
          <div className="navigation-box">
            <div className="navigation-button">Navigation starten</div>
          </div>
        )}
      </div>
    </div>
  );
}

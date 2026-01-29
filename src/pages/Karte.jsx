import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Karte.css'
import { useState } from 'react';
import BackArrow from '../assets/BackArrow.png';
import { Link } from 'react-router-dom';
import LogoSchacht from '../assets/LogoSchacht.png';

export function Karte() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="karte-wrapper">

      <div className="karte-header">
            <Link to="/">
                <img
                src={BackArrow}
                alt="BackArrow"
                className="backarrow" />
            </Link>
          
            <Link to="/">
                <img
                src={LogoSchacht}
                alt="Schachtlogo"
                className="schachtlogo" />
            </Link>


        <div className="karte-toggle-switch" onClick={() => setToggle(t => !t)} aria-pressed={toggle} tabIndex={0} role="button">
          <div className={`toggle-track${toggle ? ' toggle-on' : ''}`}>
            <div className="toggle-circle" />
          </div>
        </div>
      </div>


      <div className="karte-map-container">
        <MapContainer center={[49.90187911322085, 8.855138539832907]} zoom={13} className="karte-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[49.90187911322085, 8.855138539832907]}>
            <Popup>Hochschule Darmstadt Mediencampus</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

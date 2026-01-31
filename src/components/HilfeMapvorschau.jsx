import React from "react";
import './HilfeMapvorschau.css';
import MapPicture from '../assets/MapPicture.png';

export default function HilfeMapvorschau({ text }) {
  return (
    <div className="hilfe-mapvorschau">
      <p>{text}</p>

      <div className="map-preview-box">
        <img
          src={MapPicture}
          alt="Karten-Vorschau"
          className="map-preview-img"
        />
        <a href="/karte" className="map-preview-btn">
          Wegpunkt anzeigen
        </a>
      </div>
    </div>
  );
}

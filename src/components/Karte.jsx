import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Karte.css'
export function Karte() {
  return (
    <MapContainer center={[49.90187911322085, 8.855138539832907]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.90187911322085, 8.855138539832907]}>
        <Popup>Hochschule Darmstadt Mediencampus</Popup>
      </Marker>
    </MapContainer>
  );
}

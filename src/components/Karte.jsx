import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Karte() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.90187911322085, 8.855138539832907]}>
        <Popup>Hochschule Darmstadt Mediencampus</Popup>
      </Marker>
    </MapContainer>
  );
}

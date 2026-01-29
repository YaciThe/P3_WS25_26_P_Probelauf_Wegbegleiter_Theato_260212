import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

export default function RoutingControl({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      lineOptions: { styles: [{ color: "#0074D9", weight: 5 }] },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      routeWhileDragging: false,
      createMarker: () => null,
    }).addTo(map);
    return () => map.removeControl(routingControl);
  }, [from, to, map]);

  return null;
}

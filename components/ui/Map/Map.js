import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <MapContainer
      center={[38.80294, 26.97015]}
      zoom={17}
      scrollWheelZoom={false}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        top: isMobile ? "830px" : "",
        width: "100%",
        height: "175px",
      }}
    >
      <TileLayer
        /* attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' */
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.80294, 26.97015]}>
        <Popup>Aliaga Belediyesi</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

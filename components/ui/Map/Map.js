import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 40],
});
const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  console.log(isMobile);
  return (
    <MapContainer
      center={[38.803977, 26.969505]}
      zoom={17}
      scrollWheelZoom={false}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        top: isMobile ? "830px" : undefined,
        width: "100%",
        height: "175px",
      }}
    >
      <TileLayer
        /* attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' */
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.803977, 26.969505]} icon={ICON}>
        <Popup>Aliaga Belediyesi</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

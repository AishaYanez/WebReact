import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './ShowMap.css'
function ShowMap(props) {
  const h = props.hotel;
  return (
    <>
      <MapContainer style={{ height: "100%", width: "100%", borderRadius: "80px / 60px" }} id={h.key} center={[h.latitude, h.longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[h.latitude, h.longitude]}>
          <Popup>
            {h.name}
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default ShowMap;
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function ShowMap(props) {
  const {hotel} = props;
  return (
    <>
      <MapContainer style={{ height: "100%", width: "100%", borderRadius: "80px / 60px" }} id={hotel.key} center={[hotel.latitude, hotel.longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[hotel.latitude, hotel.longitude]}>
          <Popup>
            {hotel.name}
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default ShowMap;
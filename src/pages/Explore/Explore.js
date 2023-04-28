import { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import HotelService from "../../services/hotel.service";
import './Explore.css'

function Explore() {
	const [hotels, setHotels] = useState([]);
	// BUSCADOR
	// const [query, setQuery] = useState("");

	const getHotels = () => {
		const allHotels = HotelService.getHotels();
		setHotels(allHotels);
	}

	const showHotel = () => {
		return (
			hotels.map(h => {
				return (
					<div className="hotels-information-container">
						<div style={{
							background: `url(/assets/img/${h.url})`,
							backgroundSize: "cover"
						}} className="img-hotels" >
							<div className="icon-container">
								<ion-icon name="add-sharp"></ion-icon>
							</div>
						</div>
						<div className="map-container">
							<div className="map">
								
							</div>
						</div>
					</div>


				);
			})
		);
	}

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<div className="hotels-container">
				{showHotel()}
			</div>
		</>
	);
}

export default Explore;
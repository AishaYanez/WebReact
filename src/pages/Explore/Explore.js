import { useState, useEffect } from "react";
import HotelService from "../../services/hotel.service";
import ShowMap from "../../components/ShowMap/ShowMap";
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
								<a href="/explore/information"><ion-icon name="add-sharp"></ion-icon></a>
							</div>
						</div>
						<div className="map-container">
								<ShowMap hotel={h}/>
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
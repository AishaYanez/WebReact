import { useState, useEffect } from "react";
import HotelService from "../../services/hotel.service";
import ShowMap from "../../components/ShowMap/ShowMap";
import './Explore.css'

function Explore() {
	const [hotels, setHotels] = useState([]);

	// BUSCADOR
	// const [query, setQuery] = useState("");
	const getAllHotels = () => {
		HotelService.getAllHotels()
		.then((items) => {
		  let allHotels = [];
		  items.forEach(item => {
			const key = item.key;
			const data = item.val();
			allHotels.push({
			  key: key,
			  name: data.name,
			  url: data.url,
			  latitude: data.latitude,
			  longitude: data.longitude
			});
		  });
		  setHotels([...allHotels]);
		})
		.catch((err) => {
		  console.error(err);
		});
	}

	const showHotel = () => {
		return (
			hotels.map(h => {
				return (
					<div className="hotels-information-container" key={h.key}>
						<div style={{
							background: `url(/assets/img/${h.url})`,
							backgroundSize: "cover"
						}} className="img-hotels" >
							<div className="icon-container">
								<a href={`/explore/${h.key}`}><ion-icon name="add-sharp"></ion-icon></a>
							</div>
						</div>
						<div className="map-container">
							<div className="map">
								<ShowMap hotel={h} />
							</div>
						</div>
					</div >
				);
			})
		);
	}

	useEffect(() => {
		getAllHotels();
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
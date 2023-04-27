import { useState, useEffect } from "react";
import ImgService from "../../services/img.service";
import './ImgList.css'

function ImgList() {
	const [imgs, setImgs] = useState([]);
	const [counter, setCounter] = useState(0);
	// BUSCADOR
	// const [query, setQuery] = useState("");

	const getImgs = () => {
		const allImgs = ImgService.getImgs();
		setImgs(allImgs);
	}

	const showImg = () => {
		return (
			imgs.filter(img => img.id === counter).map(img => {
				return (
					<div style={{
						background: `url(/assets/img/${img.url})`,
						backgroundSize: "cover"
					}} className="img-flights" >
						<a href={img.page} className="btn">{img.name}</a>
					</div>
				);
			})
		);
	}

	useEffect(() => {
		getImgs();
		const interval = setInterval(() => {
			setCounter(counter => (counter + 1)%2);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{showImg()}
		</>
	);
}

export default ImgList;
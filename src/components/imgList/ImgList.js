import { useState, useEffect } from "react";
import ImgService from "../../services/img.service";
import './ImgList.css'

function ImgList() {
	const [imgs, setImgs] = useState([]);
	const [counter, setCounter] = useState(1);
	// BUSCADOR
	// const [query, setQuery] = useState("");

	const getImgs = () => {
		const allImgs = ImgService.getImgs();
		setImgs(allImgs);
	}

	const showImg = () => {
		return (
			imgs.filter(img => img.id == counter).map(img => {
				return (
					<div style={{
						background: `url(/assets/img/${img.url})`,
						backgroundSize: "cover"
					}} className="img-flights" >
						<button className="btn" type="button">{img.name}</button>
					</div>
				);
			})
		);
	}

	useEffect(() => {
		getImgs();
	}, []);

	return (
		<>
				{showImg()}
		</>
	);
}

export default ImgList;
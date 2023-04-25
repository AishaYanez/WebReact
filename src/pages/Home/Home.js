import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Home.css'

const imgList = [
	{
		id:1,
		imgUrl:'./img/flights.jpg'
	}
]

// style={{background: ´url(./img/flights.jpg)´}}

function Home() {
	return (
		<>
			<Header />
			<div class="main-container">
				<div class="img-container-home">
					<div class="img-flights" >
						<button class="btn" type="button">Vuelos</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
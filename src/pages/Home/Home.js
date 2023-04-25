import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <div class="main-container">
                <div class="img-container">
                    <div class="img-flights">
                        <button class="btn" type="button">Vuelos</button>
                        <p>Home</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
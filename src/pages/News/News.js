import img from './img/news.jpg'
import './News.css';


function News() {

  return (
    <>
      <div className="news-container">
      <h1>Noticias varias</h1>
        <div>
          <h2>Descuento de fin de temporada</h2>
          <p>Aprovecha la bajada de septiembre</p>
          <p><a href='https://webreact-920d3.web.app//assets/RSS/RSS.xml'>Descuento</a></p>
          <div><img alt='Imagen de avión' src={img}/></div>
        </div>
        <div>
          <h2>Descuento especial</h2>
          <p>Para aquellos clientes cuyo número de asociado acabe en XXX, tenemos una oferta especial</p>
          <p><a href='https://webreact-920d3.web.app//assets/RSS/RSS.xml'>Descuento</a></p>
          <div><img alt='Imagen de avión' src={img}/></div>
        </div>
        <div>
          <h2>Nuevos destinos</h2>
          <p>Aumento de los lugares que tenemos a tu disposición</p>
          <p><a href='https://webreact-920d3.web.app//assets/RSS/RSS.xml'>Novedad</a></p>
          <div><img alt='Imagen de avión' src={img}/></div>
        </div>
    </div>
    </>
  );
}

export default News;
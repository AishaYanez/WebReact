import './Footer.css';

function Footer() {
	return (
		<>
			<footer className="footer-container">
				<div className="copyright-container">
					<p>© 2023 Travels Todos los derechos reservados</p>
				</div>
				<div className="project-information">
					<p>
						<a className='project-link' href='https://github.com/AishaYanez/WebReact'>Github</a>
						|
						<a className='project-link' href='https://www.figma.com/file/jS9mI8IQAjCc2FBpdaNnYS/Untitled?node-id=1%3A2&t=cKiMAZNkQ4dEws8c-1'>Figma</a>
					</p>
				</div>
				<div className="politics-container">
					<p><a className='politics-privaticy' href='/privacity-politics'>Política de Privacidad y Cookies</a> | <a className='politics-privaticy' href='/sales-politcs'>Condiciones de Venta</a></p>
				</div>
				<div className="icons-container">
					<ion-icon name="logo-facebook"></ion-icon>
					<ion-icon name="logo-instagram"></ion-icon>
					<ion-icon name="logo-twitter"></ion-icon>
					<ion-icon name="logo-twitch"></ion-icon>
				</div>
			</footer>
		</>
	);
}

export default Footer;


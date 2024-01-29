import React from "react";
import logoCC from "./media/iconDark.jpg"

const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
        <img className="mx-3" src={logoCC} alt="Zagarsix" width="60" height="50"></img>
		<span>&copy; 2024 - Developed with <i className="fa fa-heart text-danger" /> by {""}
			<a href="https://github.com/Zagarsix">Zagarsix</a>
		</span>
	</footer>
);

export default Footer;
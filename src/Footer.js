import React from "react";
import logoCC from "./media/logoGif.gif"

const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<span>Developed with <i className="fa fa-heart text-danger" /> by {""}
			<a href="https://github.com/Zagarsix">Zagarsix</a>
		</span>
		<img className="mx-3" src={logoCC} alt="Zagarsix" width="270" height="150"></img>
	</footer>
);

export default Footer;
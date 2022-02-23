import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	const { mostrarCompletadas, cambiarMostrarCompletadas } = props;

	return (
		<header className="header">
			<h1 className="header__titulo">Lista de Tareas</h1>
			<button className="header__boton" onClick={() => cambiarMostrarCompletadas(!mostrarCompletadas)}>
				{mostrarCompletadas ? "Ocultar completadas" : "Mostrar completadas"}
				<FontAwesomeIcon
					className="header__icono-boton"
					icon={mostrarCompletadas ? faEyeSlash : faEye} />
			</button>
		</header>
	);
}

export default Header;
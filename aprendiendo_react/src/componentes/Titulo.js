import React from "react";

const Titulo = (props) => {
	const { usuario = "usuario", color = "blue" } = props;

	return (
		<h1 className="titulo" style={{ color: color }}>
			Hola {usuario}!
		</h1>
	);
};

export default Titulo;

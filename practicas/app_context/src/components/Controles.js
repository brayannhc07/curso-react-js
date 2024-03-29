import React from "react";
import styled from "styled-components";

const Controles = () => {
	return (
		<ContenedorControles>
			<div>
				<Boton>Aumentar Fuente</Boton>
				<Boton>Disminuir Fuente</Boton>
			</div>
			<div>
				<Boton>Izquierda</Boton>
				<Boton>Centro</Boton>
				<Boton>Derecha</Boton>
			</div>
		</ContenedorControles>
	);
}

const ContenedorControles = styled.div`
	margin-top: 20px;
`;

const Boton = styled.button`
	background: #165168;
	color: #fff;
	border: none;
	cursor: pointer;
	font-size: 12px;
	padding: 7px;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 3px;

	&:hover {
		background: #191668;
	}
`;

export default Controles;
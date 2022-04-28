import React from "react";
import Productos from "./Productos";

const Tienda = (props) => {
	const { productos } = props

	return (
		<div>
			<h1>Tienda</h1>
			<Productos productos={productos} />
		</div>
	);
}

export default Tienda;
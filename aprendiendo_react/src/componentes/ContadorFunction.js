import React, { useState } from "react";

const ContadorFunction = (props) => {

	const [contador, cambiarContador] = useState(0);
	const incrementar = (cantidad) => cambiarContador(contador + cantidad);
	const disminuir = (cantidad) => cambiarContador(contador - cantidad);

	return (
		<div>
			<h1>Contador: {contador}</h1>
			<button onClick={() => incrementar(props.aumento)}>Incrementar</button>
			<button onClick={() => disminuir(props.disminucion)}>Disminuir</button>
		</div>
	);
}

export default ContadorFunction;
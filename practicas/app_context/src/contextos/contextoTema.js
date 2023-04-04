import React from "react";
import { useState } from "react";

// Creamos el contexto = estado global
const ContextoTema = React.createContext();

const ProvedorTema = ({ children }) => {
	const [tema, cambiarTema] = useState({
		alineado: 'center',
		fuente: 30
	});

	return (
		<ContextoTema.Provider
			value={{ tema, cambiarTema }}>
			{children}
		</ContextoTema.Provider>
	)
}

export {
	ContextoTema, ProvedorTema
};
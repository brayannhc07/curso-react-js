import { useState, useEffect } from "react";

const useObtenerArticulos = () => {
	const [articulos, establecerArticulos] = useState([]);
	const [cargando, establacerCargando] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			establecerArticulos([
				{
					id: 1,
					titulo: "Titulo del primer artículo"
				},
				{
					id: 2,
					titulo: "Titulo del segundo artículo"
				},
				{
					id: 3,
					titulo: "Titulo del tercer artículo"
				},
			]);
			establacerCargando(false);
		}, 3000);
	}, []);
	return [articulos, cargando];
}

export default useObtenerArticulos;
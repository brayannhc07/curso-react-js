import React, { useState } from "react";

const FormularioIniciarSesion = (props) => {
	const [usuario, cambiarUsuario] = useState("");
	const [password, cambiarPassword] = useState("");

	const onChange = (e) => {
		switch (e.target.name) {
			case "usuario":
				cambiarUsuario(e.target.value);
				break;
			case "password":
				cambiarPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (usuario === "bryan" && password === "123") {
			props.cambiarEstadoSesion(true);
		} else {
			alert("Datos incorrectos.");
			cambiarUsuario("");
			cambiarPassword("");
		}
	};

	return (
		<form action="" onSubmit={onSubmit}>
			<p>Usuario: {usuario}</p>
			<p>Contraseña: {password}</p>
			<div>
				<label htmlFor="usuario">Usuario</label>
				<input
					type="text"
					name="usuario"
					id="usuario"
					value={usuario}
					onChange={onChange} />
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={onChange} />
			</div>
			<button type="submit">Iniciar Sesión</button>
		</form>
	);
};

export default FormularioIniciarSesion;
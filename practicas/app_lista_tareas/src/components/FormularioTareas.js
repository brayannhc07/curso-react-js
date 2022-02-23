import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = (props) => {

	const [inputTarea, cambiarInputTarea] = useState("");
	const { tareas, cambiarTareas } = props;
	const handleSubmit = (e) => {
		e.preventDefault();

		cambiarTareas([
			...tareas,
			{
				id: uuidv4(),
				texto: inputTarea,
				completado: false
			}
		]);
		cambiarInputTarea('');
	};

	const handleInput = (e) => {
		cambiarInputTarea(e.target.value);
	};

	return (
		<form action="" className="formulario-tareas" onSubmit={handleSubmit}>
			<input
				type="text"
				className="formulario-tareas__input"
				placeholder="Escribe una tarea"
				value={inputTarea}
				onChange={handleInput}
			/>
			<button
				type="submit"
				className="formulario-tareas__btn">
				<FontAwesomeIcon
					icon={faPlusSquare}
					className="formulario-tareas__icono-btn" />
			</button>
		</form>
	);
}

export default FormularioTareas;
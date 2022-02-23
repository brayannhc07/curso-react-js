import React from "react";
import Tarea from "./Tarea";

const ListaTareas = (props) => {
	const { tareas = [], cambiarTareas, mostrarCompletadas } = props;

	const toggleCompletada = (id) => {
		cambiarTareas(tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completado = !tarea.completado;
			}
			return tarea;
		}));
	};

	const editarTarea = (id, texto) => {
		cambiarTareas(tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.texto = texto;
			}
			return tarea;
		}));
	};

	const eliminarTarea = (id) => {
		cambiarTareas(tareas.filter((tarea) => tarea.id !== id));
	};

	return (
		<ul className="lista-tareas">
			{
				tareas.length > 0 ?
					tareas.map((tarea) => {
						if (mostrarCompletadas || (!mostrarCompletadas && !tarea.completado)) {
							return <Tarea
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editarTarea={editarTarea}
								eliminarTarea={eliminarTarea}
							/>
						}
						return false;

					}) :
					<div className="lista-tareas__mensaje">No hay Tareas Agregadas</div>
			}
		</ul>
	);
}

export default ListaTareas;
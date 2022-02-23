import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';

const App = () => {

  // Obtenemos tareas guardadas del localstorage
  const tareasGuardadas = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Obtenermos mostrarCompletadas de localstorage
  const completadas = !localStorage.getItem("mostrarCompletadas") || localStorage.getItem("mostrarCompletadas") === "true";
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(completadas);

  // Guardando tareas en localstorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Guardando mostrarCompletadas en localstorage
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
};

export default App;

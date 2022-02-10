import React, { useState, useEffect } from "react";
import styles from "./ContadorFunction.css";
import Boton from "../elementos/Boton";

const ContadorFunction = (props) => {
  const [contador, cambiarContador] = useState(0);

  // Se ejecuto con cada ciclo de renderizado
  // useEffect(() => {
  //   console.log("El componente se renderizó");
  // });

  // Este hook se ejecuta sólo la primera vez
  // useEffect(() => {
  //   console.log("El componente se renderizó por primera vez");
  // }, []);

  // Se ejecuta cuando cambia el estado de la dependencia que indiquemos
  // useEffect(() => {
  //   console.log("El estado del contador cambió");
  // }, [contador]);

  // Se ejecuta cuando se elimina el componente
  // useEffect(() => {
  //   // Condigo del efecto

  //   return () => {
  //     console.log("Adios componente.");
  //   };
  // }, []);

  const incrementar = (cantidad) => cambiarContador(contador + cantidad);
  const disminuir = (cantidad) => cambiarContador(contador - cantidad);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <Boton negro marginRight onClick={() => incrementar(props.aumento)}>
        Incrementar
      </Boton>
      <Boton negro marginRight onClick={() => disminuir(props.disminucion)}>
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFunction;

import React, { useState } from "react";
import styles from "./ContadorFunction.css";
import Boton from "../elementos/Boton";

const ContadorFunction = (props) => {
  const [contador, cambiarContador] = useState(0);
  const incrementar = (cantidad) => cambiarContador(contador + cantidad);
  const disminuir = (cantidad) => cambiarContador(contador - cantidad);

  console.log(styles.boton);
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <Boton
        negro
        marginRight
        className={styles.boton}
        onClick={() => incrementar(props.aumento)}
      >
        Incrementar
      </Boton>
      <Boton
        negro
        marginRight
        className={styles.boton}
        onClick={() => disminuir(props.disminucion)}
      >
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFunction;

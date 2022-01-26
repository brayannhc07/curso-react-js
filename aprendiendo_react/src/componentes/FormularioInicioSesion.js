import React, { useState } from "react";
import styles from "./FormularioInicioSesion.module.css";
import Boton from '../elementos/Boton';

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
    <form action="" onSubmit={onSubmit} className={styles.formulario}>
      <h1>No has iniciado sesión.</h1>
      <div>
        <label htmlFor="usuario" className={styles.label}>
          Usuario
        </label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div>
        <Boton largo type="submit" className={styles.boton}>
          Iniciar Sesión
        </Boton>
      </div>
    </form>
  );
};

export default FormularioIniciarSesion;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./componentes/Usuario";
import FormularioIniciarSesion from "./componentes/FormularioInicioSesion";
import ContadorFunction from "./componentes/ContadorFunction";
import Boton from './elementos/Boton';
import "./index.css";

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <div className="contenedor">
      {sesion === true ? (
        <div>
          <Usuario />
          <ContadorFunction aumento={3} disminucion={3} />
          <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>
            Cerrar Sesión
          </Boton>
        </div>
      ) : (
        <div>
          <FormularioIniciarSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./componentes/Usuario";
import FormularioIniciarSesion from "./componentes/FormularioInicioSesion";
import ContadorClass from './componentes/ContadorClass';
import ContadorFunction from "./componentes/ContadorFunction";

const App = () => {

  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <React.Fragment>
      {sesion === true ?
        <div>
          <Usuario />
          <ContadorClass aumento={3} disminucion={3} />
          <hr />
          {/* <ContadorFunction aumento={3} disminucion={3} /> */}
          <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
        </div>
        :
        <div>
          <FormularioIniciarSesion cambiarEstadoSesion={cambiarEstadoSesion} />
          {/* <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
        </div>
      }
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

const nombre = "Bryan";
const color = "blue";
const sesion = true;
const pais = null;
const amigos = ["Saúl", "Itzel", "Fer"];

const JSX = (
  <div>
    {sesion === true ? (
      <div>
        <h1 className="titulo" style={{ color: color }}>
          Hola {nombre}!
        </h1>
        <p>Que tengas buen día.</p>
        {pais && <p>Tú eres de {pais}</p>}
        <ul>
          {amigos.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No has iniciado sesión.</p>
    )}
  </div>
);

// const verificarSesion = (sesion) => {
//   if (sesion == true) {
//     return JSX;
//   } else {
//     return <h1>No has iniciado sesión.</h1>;
//   }
// };

// ReactDOM.render(verificarSesion(sesion), document.getElementById("root"));
ReactDOM.render(JSX, document.getElementById("root"));

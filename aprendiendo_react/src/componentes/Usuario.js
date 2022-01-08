import React from "react";
import Titulo from "./Titulo";

const Usuario = () => {
  const pais = null;
  const amigos = ["Saúl", "Itzel", "Fer"];
  return (
    <div>
      <Titulo />
      <Titulo usuario="Bryan" color="green" />
      <p>Tu lista de amigos:</p>
      {pais && <p>Tú eres de {pais}</p>}
      <ul>
        {amigos.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <p>Que tengas buen día.</p>
    </div>
  );
};

export default Usuario;

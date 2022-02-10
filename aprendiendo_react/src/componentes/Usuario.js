import React from "react";
import Titulo from "./Titulo";
import styled from "styled-components";

const pStyle = {
  margin: 20,
};

const Parrafo = styled.p`
  margin: 20px 0px;
`;

const Usuario = () => {
  const pais = null;
  const amigos = ["Saúl", "Itzel", "Fer"];
  return (
    <div>
      <Titulo />
      <Titulo usuario="Bryan" color="green" />
      <Parrafo>Tu lista de amigos:</Parrafo>
      {pais && <p>Tú eres de {pais}</p>}
      <ul>
        {amigos.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <Parrafo style={pStyle}>Que tengas buen día.</Parrafo>
    </div>
  );
};

export default Usuario;

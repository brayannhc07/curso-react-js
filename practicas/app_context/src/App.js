import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextoTema } from './contextos/contextoTema';

import AcercaDe from './components/AcercaDe';
import Blog from './components/Blog';
import Post from './components/Post';
import Error404 from './components/Error404';

import Header from './components/Header';
import Inicio from './components/Inicio';
import styled from 'styled-components';

const App = () => {
  const { tema } = useContext(ContextoTema);


  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Routes>
            <Route path='*' element={<Error404 />} />
            <Route path='/' element={<Inicio />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/acerca-de' element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
  text-align: ${props => props.tema ? props.tema.alineado : 'right'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
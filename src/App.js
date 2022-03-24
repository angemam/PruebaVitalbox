import './App.css';
import Header from './Components/Header/Header';
import Contenido2 from './Components/Contenido2/Contenido2';
import React, {useState} from 'react';
import CRUDtable from './Components/Contenido/CRUD';

function App() {

  return (
    <>
      <Header></Header>
      <Contenido2></Contenido2>
    </>
  )
}

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import { baseColaboradores } from "./baseColaboradores";



function App() {
  
  const [colaboradores, setColaboradores] = useState(baseColaboradores)
  
  const [busqueda, setBusqueda] = useState("")


  return (
    <div className="App">
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <Form colaboradores={colaboradores} setColaboradores={setColaboradores} />
      <List colaboradores={colaboradores}/>
    </div>
  );
}

export default App;

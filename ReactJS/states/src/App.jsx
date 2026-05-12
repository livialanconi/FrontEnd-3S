import { useState } from "react";
import Contador from "./components/contador/contador";
import CadFruta from "./components/cadFruta/cadfruta";
import CicloDeVida from "./components/ciclodevida/ciclodevida";

function App () {
  const [mostrar, setMostrar] = useState(true);

  //objeto privado
  const [nome, setNome] = useState("Google");

  function trocarTexto() {
    setNome("Microsoft");
  }

  function fuiAbandonado() {
    setNome("Input foi abandonado :(")
  }

   return (
    <>
    {/* // <h1>{nome} Page</h1>
    // <button onClick={trocarTexto}>Mudar Texto</button>
    // <button onClick={() => {return setNome("Yahoo")}}>Mudar Texto</button> */}

{/* 
    <br />
    <input type="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/> */}

    {/* <Contador />
    <br></br>
    <p>Lorem ipsum <strong>{nome}</strong> dolor sit amet</p> */}
    {/* <CadFruta /> */}
    <button onClick={() => {
      setMostrar(!mostrar);
    }}>Mostrar / Ocultar</button>
    
    {mostrar && <CicloDeVida />}
    </>

 );
}

export default App
import { useState } from "react";

function App () {
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
    <h1>{nome} Page</h1>
    <button onClick={trocarTexto}>Mudar Texto</button>
    <button onClick={() => {return setNome("Yahoo")}}>Mudar Texto</button>

    <br />
    <input type="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/>

    <Contador/>
    
    </>

  );
}

export default App
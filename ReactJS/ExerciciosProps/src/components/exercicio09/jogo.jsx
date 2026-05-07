import { useState } from 'react';
import { useEffect } from 'react';
import './jogo.css';


const Jogo = ({ nome, plataforma, preco, imagem }) => 
{
    return (
        <div className="card">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>Plataforma: {plataforma}</p>
            <p>Preço: R$ {preco.toFixed(2)}</p>
        </div>
    );
}


export default Jogo
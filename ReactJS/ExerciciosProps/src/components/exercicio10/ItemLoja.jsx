import { useState } from 'react';
import { useEffect } from 'react';
import './ItemLoja.css';


const ItemLoja = ({ nome, preco, categoria, estoque }) => 
{

    if (estoque === 0) {
        estoque = "Indisponível";
    }
    else
    {
        estoque = "Disponível";
    }
    return (
        <div className="card">
            <h2>{nome}</h2>
            <p>Categoria: {categoria}</p>
            <p>Preço: R$ {preco.toFixed(2)}</p>
            <p>Estoque: {estoque}</p>
        </div>
    );
}


export default ItemLoja
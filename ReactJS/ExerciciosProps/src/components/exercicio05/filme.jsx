const Filme = ({ titulo, ano, genero, nota }) => 
{
    return (
        <p>
            <strong>{titulo}</strong> ({ano}) - {genero} - Nota: {nota}
        </p>
    );
}


export default Filme;
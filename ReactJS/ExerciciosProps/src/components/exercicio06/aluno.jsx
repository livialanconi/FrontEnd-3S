import './aluno.css';


const Aluno = ({ nome, curso, imagem}) => 
{
    return (
        <div>
            <p>{nome} - {curso}</p>
            <img src={imagem} alt={nome} />
        </div>
    );
}


export default Aluno;
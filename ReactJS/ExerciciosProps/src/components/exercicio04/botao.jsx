import './botao.css';


const Botao = ({ texto, cor }) => 
{
    return (
        <button className={cor}>
            {texto}
        </button>
    );
}


export default Botao
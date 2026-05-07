import "./perfil.css"


const Perfil = ({ nome, idade, profissao }) => 
{
    return (
        <div className="perfil">
            <div>
                <h3>{nome} </h3>
                <h3> Idade: {idade}</h3>
            </div>
             
            <h3>{profissao}.</h3>
        </div>
    );
}


export default Perfil;
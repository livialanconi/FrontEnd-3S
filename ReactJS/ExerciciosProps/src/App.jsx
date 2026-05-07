import "./App.css"
import MyComponent from "./components/childen/mycomponent"
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto"
import Perfil from "./components/exercicio03/perfil"
import Botao from "./components/exercicio04/botao"
import Filme from "./components/exercicio05/filme"
import Aluno from "./components/exercicio06/aluno"
import Card from "./components/exercicio07/card"
import Contato from "./components/exercicio08/contato"
import Jogo from "./components/exercicio09/jogo"
import ItemLoja from "./components/exercicio10/ItemLoja"
import imagemAluno from "./assets/hero.png"

const App = () => {
  const pessoas = [
    {
      id: 1,
      nome: "Lívia Caires",
      idade: 17,
      profissao: "nutricionista"
    },
    {
      id: 2,
      nome: "Luis Oliva",
      idade: 17,
      profissao: "engenheiro de software"
    }
  ]
  return (

    <>
      <Saudacao nome="Livia" />
      <Saudacao nome="Amy" />
      <Saudacao nome="Luis" />

      <Produto nome="Notebook" preco={3500.00} descricao="Computador portátil com 16GB de RAM e 512GB de armazenamento." />
      <Produto nome="Geladeira" preco={4999.00} descricao="Refrigerador com 300 litros de capacidade." />
      <Produto nome="Maquina de lavar" preco={1500.00} descricao="Máquina de lavar roupa com 10kg de capacidade." />

      <Perfil nome="Livia" idade={25} profissao="Desenvolvedor" />
      <Perfil nome="Amy" idade={30} profissao="Designer" />
      <Perfil nome="Luis" idade={28} profissao="Analista de Dados" />

      <Botao texto="Botão Vermelho" cor="vermelho" />

      <Filme titulo="O Poderoso Chefão" ano={1972} genero="Crime/Drama" nota={9.2} />
      <Filme titulo="A Origem" ano={2010} genero="Ficção Científica/Ação" nota={8.8} />
      <Filme titulo="Pulp Fiction" ano={1994} genero="Crime/Drama" nota={8.9} /> 

      <Aluno nome="Livia" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="Amy" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="Luis" curso="Engenharia de Software" imagem={imagemAluno} />

      <Contato nome="Livia" telefone="(11) 99999-9999" email="livia@example.com" />
      <Contato nome="Amy" telefone="(11) 99999-9999" email="amy@example.com" />
      <Contato nome="Luis" telefone="(11) 99999-9999" email="luis@example.com" />

    <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={imagemAluno} />
      <Jogo nome="Super Mario Odyssey" plataforma="Nintendo Switch" preco={199.99} imagem={imagemAluno} />
      <Jogo nome="Sonic Mania" plataforma="PS4" preco={59.99} imagem={imagemAluno} />

      <ItemLoja nome="Notebook Gamer" preco={4500.00} categoria="Eletrônicos" estoque={10} />
      <ItemLoja nome="Smartphone" preco={2500.00} categoria="Eletrônicos" estoque={0} />
      <ItemLoja nome="Fone de Ouvido" preco={150.00} categoria="Acessórios" estoque={5} />
    </>
// pessoas.map(pessoa => (
// <Perfil key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
  
//     )

    )
}

export default App
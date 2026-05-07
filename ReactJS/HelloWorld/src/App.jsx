import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/paragrafo/title/title';

function App() {
  return (
    <div>
      <Title nome="Lívia" sobrenome = "Lançoni" texto = "Bem vindo, sou o título"/>
      <Title texto="Eu sou outro Título"/>
    <Paragrafo textoParagrafo  = "Lorem Ipsum..."/>
    
    </div>
  );
}

export default App;

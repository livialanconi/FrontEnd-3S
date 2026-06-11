import './App.css'
import Login from "./pages/login/Login.jsx"
import CadastroFilme from './pages/cadastroFilme/CadastroFilme'
import CadastroGenero from './pages/cadastroGenero/CadastroGenero'
import Header from './components/header/Header.jsx'
import PrivateRoute from "./routes/PrivateRoute.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

      return (
   <BrowserRouter>
    <Routes>
      <Route path="/" 
      element=
      {<Login />} />

      <Route path="/filmes" 
      element=
      {
        <PrivateRoute>
          <CadastroFilme />
        </PrivateRoute>
      } />

      <Route path="/generos" 
      element=
      {
        <PrivateRoute>
          <CadastroGenero />
        </PrivateRoute>
      } />

    </Routes>
   </BrowserRouter>
  )
}

export default App
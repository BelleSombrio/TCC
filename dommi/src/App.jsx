import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cadastro from './components/cadastro/Cadastro'
import Busca from './components/busca_2_3/Busca'
import Profissional from './components/profissionais/Profissional'
import Home from './components/home_1/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
    <Home/>
     
      <div class="menu bottom-menu"></div>
     </div>
    </>
  )
}

export default App

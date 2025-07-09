import React from 'react'
import './Home.css'
 <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Roboto&display=swap" rel="stylesheet"></link>
export default function Home() {
  return (
    <div>

<div className='container_1'>
      <div className='texto_img'>
        <p>Solicite um atendimento  AGORA!!</p>
      </div>
      <div className='img_salon'>
        <img src="https://img.freepik.com/vetores-premium/salao-de-cabeleireiro-com-corte-de-cabelo-e-penteado-no-salao-de-beleza-ou-barbeiro-em-ilustracao-plana-dos-desenhos-animados_2175-8670.jpg?semt=ais_items_boosted&w=740" alt="" height="180px" width="220px" />
      </div>

        <div class="formulario">
        <input class="endereco" type="text" placeholder="Seu endereço"/>
        <div class="linha-menores">
          <input class="data" type="number" placeholder="Data"/>
          <input class="hora" type="number" placeholder="Horário"/>
        </div>
        <button class="agendar">Agendar</button>
      </div>
</div>





      <div className='carousel'>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>

      </div>
    </div>
  )
}

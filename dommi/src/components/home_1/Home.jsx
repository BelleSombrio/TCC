import React from 'react'
import './Home.css'
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Roboto&display=swap" rel="stylesheet"></link>
export default function Home() {
  return (
    <div>

      <div className='container_1'>

        {/* AGRUPA texto + imagem */}
        <div className='grupo_texto_img'>
          <div className='texto_img'>
            <p>Solicite um <br />
              atendimento <br /> AGORA!!</p>
          </div>
          <div className='img_salon'>
            <img
              src="https://img.freepik.com/vetores-premium/salao-de-cabeleireiro-com-corte-de-cabelo-e-penteado-no-salao-de-beleza-ou-barbeiro-em-ilustracao-plana-dos-desenhos-animados_2175-8670.jpg?semt=ais_items_boosted&w=740"
              alt=""
             
            />
          </div>
        </div>

        {/* FORMULÁRIO ABAIXO */}
        <div className="formulario">
          <input className="endereco" type="text" placeholder="Seu endereço" />
          <div className="linha-menores">
            <input className="data" type="number" placeholder="Data" />
            <input className="hora" type="number" placeholder="Horário" />
          </div>
          <button className="agendar">Agendar</button>
        </div>
      </div>

      <br /> <br />

      <div className='Carossel'>
        <div className='texto-carrosel'>
          <p>Mais procurados</p>
        </div>
        <div className='carousel'>
          <div className="card"> <img src="https://presencadeluxo.pt/img/cms/blog/cabeleireiro%20de%20sucesso.jpg" alt="" width={400} height={200}/></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>

      <div className='Carrosel2'>
        <div className='texto-carrosel'>
          <p>Famosos no Dommi</p>
        </div>
        <div className='carousel famosos'>
          <div className="card ret"></div>
          <div className="card ret"></div>
          <div className="card ret"></div>
          <div className="card ret"></div>
          <div className="card ret"></div>
        </div>
      </div>





    </div>
  )
}

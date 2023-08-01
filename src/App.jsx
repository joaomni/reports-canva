import React from 'react'
import moment from 'moment'

import './App.css'

import Hipica from "./pdf/01 meta_whats.pdf"
import Pizzini  from "./pdf/01 google_clinica.pdf"
import Frizon from "./pdf/01 google_bellafrizon.pdf"
import BBJ from "./pdf/01 meta_google_casamentos.pdf"
import RN from "./pdf/01 meta_raçanegra.pdf"


import Report from './components/Report'
import Backtop from './components/Backtop'

function App() {
  const date = moment().format('DD/MM/YYYY');  

  return (
    <>
      <nav id='navbar'>
        <ul>
          <li><a href="#hipica">Hípica</a></li>
          <li><a href="#bbje">BBJ Eventos</a></li>
          <li><a href="#rn">Raça Negra</a></li>
          <li><a href="#pizzini">Dr. Fábio Pizzini</a></li>
          <li><a href="#frizon">Frizon Contrutora</a></li>
          <li><a href="#orcamentos">Orçamentos</a></li>
        </ul>
      </nav>

      <div className="container">

        <div className='title'>
          <h2>Relatórios diário {date}</h2>
        </div>

        <Report report={Hipica} link="https://drive.google.com/drive/u/2/folders/1cH9hdTKcz32s9Gw3C4Lg35KpDbkiX7zL" name="Hípica Pagliato" id="hipica"/>
        <Report report={BBJ} link="https://drive.google.com/drive/u/2/folders/1CEVRXTgPo5cryua5u13D2h37hSZoUr3q" name="BBJ Eventos" id="bbje"/>
        <Report report={RN} link="https://drive.google.com/drive/u/2/folders/1Jl4t_143dNMRGRFZZJKcwiXyQCU23WPO" name="Raça Negra" id="rn"/>
        <Report report={Pizzini} link="https://drive.google.com/drive/u/2/folders/1Zqnufbc23EGziRkeXrEYIO4sIQkKT5U7" name="Dr. Fábio Pizzini" id="pizzini"/>
        <Report report={Frizon} link="https://drive.google.com/drive/u/2/folders/1M8R8xFV5CZZ6qPcGZhkEli79bylfA8Jb" name="Frizon Construtora" id='frizon'/>

        <div className="budgets" id='orcamentos'>
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNzHHo5VQBCbW7jm_karKGWPMlmjnNjzj1ogZ-FKkdU-4VSGUfbHX66qn2D3sKlw/pubhtml?widget=true&amp;headers=false"></iframe>
        </div>
      </div>

      <Backtop />
    </>
  )
}

export default App

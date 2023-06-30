import React from 'react'
import moment from 'moment'

import './App.css'

import CMF from "./pdf/30 meta_cmf.pdf"
import Frizon from "./pdf/30 google_bellafrizon.pdf"
import Pizzini  from "./pdf/30 google_clinica.pdf"
import BBJ from "./pdf/30 meta_google_casamentos.pdf"
import Hipica from "./pdf/30 meta_whats.pdf"

import Report from './components/Report'
import Backtop from './components/Backtop'

function App() {
  moment.locale('pt-br');

  const date = moment().format('D');

  return (
    <>
      <nav id='navbar'>
        <ul>
          <li><a href="#cmf">CMF</a></li>
          <li><a href="#hipica">Hípica</a></li>
          <li><a href="#bbje">BBJ Eventos</a></li>
          <li><a href="#frizon">Frizon Contrutora</a></li>
          <li><a href="#pizzini">Dr. Fábio Pizzini</a></li>
          <li><a href="#orcamentos">Orçamentos</a></li>
        </ul>
      </nav>

      <div className="container">

        <div className='title'>
          <h2>Relatórios de {date}</h2>
        </div>
        
        <Report id="cmf" PDF={CMF}  Drive="https://drive.google.com/drive/u/2/folders/1SDT0fidAJKmx9qKO4jlDoN_mnLmBSWuo" Name="César Menotti e Fabiano"/>
        <Report id="frizon" PDF={Frizon}  Drive="https://drive.google.com/drive/u/2/folders/1RsFP3cPFl95C7JpIgmPwzdfKXj-9WnND" Name="Frizon"/>
        <Report id="pizzini" PDF={Pizzini}  Drive="https://drive.google.com/drive/u/2/folders/1HUivfJzVGyQg7mXN07Tghn3HjU5wIC4Y" Name="Dr. Fábio Pizzini"/>
        <Report id="bbje" PDF={BBJ}  Drive="https://drive.google.com/drive/folders/1Qc9tLGuJg_SZKOR12JtQ3KHkA3RBNEK6" Name="BBJ Eventos"/>
        <Report id="hipica" PDF={Hipica}  Drive="https://drive.google.com/drive/u/2/folders/1URkdNZgdqZ1O9fJXQOofbQBGdj4D_3YK" Name="Hípica"/>

        <div className="budgets" id='orcamentos'>
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWANpbUy5Icp0EhubmxKwedffzY12ifq-K04jx7tyg82De_njKd3Z020tRUhixyA/pubhtml?widget=true&amp;headers=false"></iframe>
        </div>
      </div>
      <Backtop />
    </>
  )
}

export default App

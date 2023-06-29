import React from 'react'
import './App.css'

import CMF from "./pdf/29 meta_cmf.pdf"
import Frizon from "./pdf/29 google_bellafrizon.pdf"
import Pizzini  from "./pdf/29 google_clinica.pdf"
import BBJ from "./pdf/29 meta_google_casamentos.pdf"
import Hipica from "./pdf/29 meta_whats.pdf"

import Report from './components/Report'

function App() {
  return (
    <div className="container">
      
      <Report PDF={CMF}  Drive="https://drive.google.com/drive/u/2/folders/1SDT0fidAJKmx9qKO4jlDoN_mnLmBSWuo" Name="César Menotti e Fabiano"/>
      <Report PDF={Frizon}  Drive="https://drive.google.com/drive/u/2/folders/1RsFP3cPFl95C7JpIgmPwzdfKXj-9WnND" Name="Frizon"/>
      <Report PDF={Pizzini}  Drive="https://drive.google.com/drive/u/2/folders/1HUivfJzVGyQg7mXN07Tghn3HjU5wIC4Y" Name="Dr. Fábio Pizzini"/>
      <Report PDF={BBJ}  Drive="https://drive.google.com/drive/folders/1Qc9tLGuJg_SZKOR12JtQ3KHkA3RBNEK6" Name="BBJ Eventos"/>
      <Report PDF={Hipica}  Drive="https://drive.google.com/drive/u/2/folders/1URkdNZgdqZ1O9fJXQOofbQBGdj4D_3YK" Name="Hípica"/>

      <div className="budgets">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWANpbUy5Icp0EhubmxKwedffzY12ifq-K04jx7tyg82De_njKd3Z020tRUhixyA/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
    </div>
  )
}

export default App

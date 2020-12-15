import React from 'react'

import '../../styles/pages/landing.css'

import Header from '../../components/Header/index'
import CreateItemButton from '../../components/CreateItemButton'
import Card from '../../components/Cards/index'


export default function Landing() { 
  


  return(
    <div className="landing-container">
      
      <Header />
       
      <CreateItemButton/>

      <Card />
      
    </div>
  )
}
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

export default function Header() { 
  return(
    <div className="header">
      <FiArrowLeft className="burger-sidebar"/>
      <input className="search-input" placeholder="Buscar items"/>
      <h1 className="header-title"></h1>
    </div>
  )
}
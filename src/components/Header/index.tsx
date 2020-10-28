import React from 'react'
import './styles.css'
import Sidebar from '../Sidebar/index'

export default function Header() { 
  return(
    <div className="header">
      <input className="search-input" placeholder="Buscar items"/>
      <h1 className="header-title"></h1>
    </div>
  )
}
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import './styles.css'

export default function CreateItemButton() {
  return(
    <button className="create-item-button">
      <FiPlus className="crosshair-icon"/>
      <a href="#"></a>
    </button>
  )
}


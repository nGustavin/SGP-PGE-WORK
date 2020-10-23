import React from 'react'
import './styles.css'

export default function Card() {
  return(
    
      <div className="card-container">
        <div className="flex-container">
          <div className="card-image"> </div>
          <span className="title">Monitor Positivo</span>
          <strong className="amount">Quantidade: <span>203</span> </strong>
          <strong className="avaliable">Disponivel: <span>8</span> </strong>
        </div>
      </div>

  )
}

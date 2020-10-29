import React from 'react'
import './styles.css'
import monitorImage from '../../utils/images/monito.jpg'

export default function Card() {
  return(
    
      <div className="card-container">
        <div className="flex-container">
          <div className="image-container">
            <img src={monitorImage} alt="monitor image" className="card-image"/>
          </div>
          <span className="title">Monitor Dell</span>
          <strong className="amount">Quantidade: <span>203</span> </strong>
          <strong className="avaliable">Disponivel: <span>8</span> </strong>
        </div>
      </div>

  )
}

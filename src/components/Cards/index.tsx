import React, { useEffect, useState } from 'react'
import './styles.css'
import monitorImage from '../../utils/images/monito.jpg'
import { Link } from 'react-router-dom'
import api from '../../services/api'  

interface Set {
  name: string;
  amount: number;
  avaliable: number;
}

function Card() {

  const [ itemSets, setItemsets ] = useState<Set[]>([])

  

  useEffect(() => {
    api.get('item-sets').then(response => {
      setItemsets(response.data)
    })
  }, [])
  
  return(
    <Link to="/view-set">
      {itemSets.map(itemSet => {
        return(
          <div className="card-container">
            <div className="flex-container">
              <div className="image-container">
                <img src={monitorImage} alt="monitor" className="card-image"/>
              </div>
            <span className="title"> {[itemSets]} </span>
            <strong className="amount">Quantidade: <span> {itemSets} </span> </strong>
            <strong className="avaliable">Disponivel: <span> {itemSets} </span> </strong>
        </div>
      </div>
        )
      })}
    </Link>
  )
}

export default Card
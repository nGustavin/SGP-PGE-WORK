import React, { useEffect, useState } from 'react'
import './styles.css'
import monitorImage from '../../utils/images/monito.jpg'
import { Link } from 'react-router-dom'
import api from '../../services/api'  
import Wrapper from './wrapper'

interface Set {
  id: number;
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
  }, [itemSets])
  
  return(
    
      <Wrapper>
      {itemSets.map(itemSet => {
        return(
          <Link to="/view-set">
          <div className="card-container" key={itemSet.id}>
            <div className="flex-container">
              <div className="image-container">
                <img src={monitorImage} alt="monitor" className="card-image"/>
              </div>
            <span className="title"> {[itemSet.name]} </span>
            <strong className="amount">Quantidade: <span> {[itemSet.amount]} </span> </strong>
            <strong className="avaliable">Disponivel: <span> {[itemSet.avaliable]} </span> </strong>
        </div>
      </div>
      </Link>
        )
      })}
    </Wrapper>
  
  )
}

export default Card
import React, { useEffect, useState } from 'react'
import './styles.css'
import monitorImage from '../../utils/images/monito.jpg'
import { Link } from 'react-router-dom'
import api from '../../services/api'  
import Wrapper from './wrapper'

interface Item {
  id: string;
  name: string;
  amount: number;
  avaliable: boolean;
  image: Array<{
    id: number;
    url: string;
  }>
   images: Array<{
     url: string;
   }>
}

function Card() {

  const [ items, setItems ] = useState<Item[]>([])

  

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
  }, [])
  
  return(
      <Wrapper>
      {items.map(item => {
        return(
          <Link to={`/item-view/${item.id}`} key={item.id}>
          <div className="card-container" >
            <div className="flex-container">
              <div className="image-container">
                <img src={monitorImage}   alt={item.name} className="card-image"/>
              </div>
            <span className="title"> {[item.name]} </span>
            <strong className="amount">Quantidade: <span> {[item.amount]} </span> </strong>
            <strong className="avaliable">Disponivel: <span> {item.avaliable ? 'SIM' : 'NAO'} </span> </strong>
        </div>
      </div>
      </Link>
        )
      })}
    </Wrapper>
  )
}

export default Card

// RH Dinheiro do consorcio 
// itemSet.images[0].url

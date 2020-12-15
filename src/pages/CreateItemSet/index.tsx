import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import api from '../../services/api'
import {CreateItemWrapper, Container,} from '../../styles/pages/showItemSet'
// import { Link } from 'react-router-dom'

interface Set {
  name: string;
  amount: number;
  avaliable: number;
}

interface ItemParams{
  id: string;
}

interface Items {
  id: number;
  room: string;
}

export default function CreateItemSet() {

  const params = useParams<ItemParams>()

  const [ itemSet, setItemSet ] = useState<Set>() 
  const [ items, setItems ] = useState<Items[]>([])

  

  useEffect(() => {
    api.get(`item-sets/${params.id}`).then(response => {
      setItemSet(response.data)  
    })
  }, [params.id])
  

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
  }, [])


  function roomCount(){
    let rooms = 0
    items.map(item => rooms+=1)

    return (<h3>{rooms}</h3>)
  }

  return(
    <>
    <Header haveArrowLeft/>
    <Container>
    
    <CreateItemWrapper className="container">
      <div className="item-image"> </div>
      <h1 className="title"> {itemSet?.name} </h1>
      <div id="room-container">
        <h2 className="room">Salas: {roomCount()}</h2>
       
      </div>
      <div id="roomValues-container">
      <div className="room-values"> 
            {items.map(item => {
              return(
                <h1 key={item.id}>{item.room}</h1>
              )
          })}
      </div>
      </div>
      <div id="amount-container">
        <h2 className="amount">Quantidade:</h2>
        <h3 className="amount-values">{itemSet?.amount}</h3>
      </div>
      <div id="avaliable-container">
        <h2 className="avaliable">Disponivel:</h2>
        <h3 className="avaliable-values">{itemSet?.avaliable}</h3>
      </div>
      
      
      
    </CreateItemWrapper>

    <div className="submit-container">
      <Link to="/create-item">
        <button type="submit"> Criar Novo Item </button>
     </Link>
    </div>
    </Container>
    </>
  )
}
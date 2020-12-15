import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CreateItemButton from '../../components/CreateItemButton'
import Header from '../../components/Header'
import api from '../../services/api'
import {CreateItemWrapper, Container,} from '../../styles/pages/createItemSet'
// import { Link } from 'react-router-dom'

interface Set {
  name: string;
  amount: number;
  avaliable: number;
}

interface ItemParams{
  id: string;
}

export default function CreateItemSet() {

  const params = useParams<ItemParams>()

  const [ itemSet, setItemSet ] = useState<Set>() 

  

  useEffect(() => {
    api.get(`item-sets/${params.id}`).then(response => {
      setItemSet(response.data)  
    })
  }, [params.id])




  return(
    <>
    <Header haveArrowLeft/>
    <Container>
    
    <CreateItemWrapper className="container">
      <div className="item-image"> </div>
      <h1 className="title"> {itemSet?.name} </h1>
      <div id="room-container">
        <h2 className="room">Salas: 290</h2>
       
      </div>
      <div id="roomValues-container">
      <p className="room-values"> 
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
     
        </p>
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
    </Container>
    </>
  )
}
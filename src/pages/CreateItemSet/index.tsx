import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CreateItemButton from '../../components/CreateItemButton'
import Header from '../../components/Header'
import api from '../../services/api'
import {CreateItemWrapper, Container,} from '../../styles/pages/createItemSet'
// import { Link } from 'react-router-dom'

interface Set {
  id: number;
  name: string;
  amount: number;
  avaliable: number;
}

interface ItemParams{
  id: string
}

export default function CreateItemSet() {

  const params = useParams<ItemParams>()

  const [ itemSets, setItemSets ] = useState<Set>()

  

  useEffect(() => {
    api.get(`item-sets/${params.id}`).then(response => {
      setItemSets(response.data)
    })
  }, [params.id])

  if(!itemSets) {
    return <p>Carregando...</p>
  }

  return(
    <>
    <Header haveArrowLeft/>
    <Container>
    
    <CreateItemWrapper className="container">
      <div className="item-image"> </div>
      <h1 className="title"> {  }

       

      </h1>
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
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
            105 103 102 203 402 504 606 702
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
        <h3 className="amount-values">524</h3>
      </div>
      <div id="avaliable-container">
        <h2 className="avaliable">Disponivel:</h2>
        <h3 className="avaliable-values">63</h3>
      </div>
      
      
      
      <CreateItemButton/>
    </CreateItemWrapper>
    </Container>
    </>
  )
}
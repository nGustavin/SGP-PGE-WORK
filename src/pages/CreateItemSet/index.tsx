import React from 'react'
import CreateItemButton from '../../components/CreateItemButton'
import Header from '../../components/Header'
import {CreateItemWrapper, Container,} from '../../styles/pages/createItemSet'
import Routes from '../../routes'
import {CreateButton} from '../../styles/pages/createItem'
import { Link } from 'react-router-dom'

export default function CreateItemSet() {
  return(
    <>
    <Header haveArrowLeft/>
    <Container>
    
    <CreateItemWrapper className="container">
      <div className="item-image"></div>
      <h1 className="title">Monitor Dell</h1>
      <div id="room-container">
        <h2 className="room">Salas: </h2>
       
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
      
      
        <Link to="/create-item" className="a-link">
          <CreateButton>
           <h1>CRIAR NOVO ITEM</h1>
          </CreateButton>
        </Link>
      
      <CreateItemButton/>
    </CreateItemWrapper>
    </Container>
    </>
  )
}
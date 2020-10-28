import React from 'react'
import Wrapper from '../../components/Cards/wrapper'
import CreateItemButton from '../../components/CreateItemButton'
import Header from '../../components/Header'
import {CreateItemWrapper, Container} from '../../styles/pages/createItemSet'

export default function CreateItemSet() {
  return(
    <>
    <Container>
    <Header />
    
    <CreateItemWrapper className="container">
      <div className="item-image"></div>
      <h1>Monitor Dell</h1>
      <h2>Salas: </h2>
      <p> 
          105 103 102 203 402 504 606 702
          105 103 102 203 402 504 606 702
          105 103 102 203 402 504 606 702
      </p>
      <h2>Quantidade:</h2>
      <h3>524</h3>
      <h2>Disponivel:</h2>
      <h3>63</h3>
      <CreateItemButton />
    </CreateItemWrapper>
    </Container>
    </>
  )
}
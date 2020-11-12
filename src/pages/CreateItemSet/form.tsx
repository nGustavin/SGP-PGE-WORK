import React from 'react'
import Header from '../../components/Header/index'
import { Container, Main, TitleArea, Form } from '../../styles/pages/form'

export default function ItemSetForm() { 
  return(
    <>
    
    <Container>
    <Header haveArrowLeft/>
    <Main>
      <TitleArea>
        <input type="button" className="send-image"/>
        <input type="text" className="title-input" />
      </TitleArea>
      <Form>
        <input type="text" className="room-input" placeholder="Sala"/> 
        <input type="text" className="amount-input" placeholder="Quantidade"/> 
        <input type="text" className="avaliable-input" placeholder="Marca"/> 
        <input type="text" className="patrimony-input" placeholder="Patrimonio"/> 
      </Form>
    </Main>
    </Container> 
    </>
  )
}


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
      </TitleArea>
      <Form id = "form-container">
        <input type="text" className="title-input" placeholder="Titulo"/>
        <input type="text" placeholder="Salas"/> 
        <input type="text" placeholder="Quantidade"/> 
        <input type="text" placeholder="Disponivel"/> 
        <div className="send-data-container">
          <input type="button" className="add-field" value="Adicionar Campo Personalizado" onClick={() => {console.log('hello')}}/>
          <input type="button" className="add-field" value="Cadastrar modelo de Item" />
        </div>
      </Form>
    </Main>
    </Container> 
    </>
  )
}


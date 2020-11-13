import React from 'react'
import Header from '../../components/Header/index'
import { Container, Main, TitleArea, Form } from '../../styles/pages/form'

export default function ItemSetForm() { 

  function handleAddField() {
    var field = document.createElement('input')
    var formulario = document.getElementById('form-container')
    return (
      console.log(formulario)
    )
  }

  handleAddField()
  return(
    <>
    <Container>
    <Header haveArrowLeft/>
    <Main>
      <TitleArea>
        <input type="button" className="send-image"/>
        <input type="text" className="title-input" placeholder="Titulo"/>
      </TitleArea>
      <Form id = "form-container">
        <input type="text" placeholder="Salas"/> 
        <input type="text" placeholder="Quantidade"/> 
        <input type="text" placeholder="Disponivel"/> 
        <input type="text" placeholder=""/>
        <div className="send-data-container">
          <input type="button" className="add-field" value="Adicionar Campo Personalizado" />
          <input type="button" className="add-field" value="Cadastrar modelo de Item" />
        </div>
      </Form>
    </Main>
    </Container> 
    </>
  )
}


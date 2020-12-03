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
        <div className="send-image">
          <input type="file" className="send-image"/>
        </div>
        {/* <label  ref="file"> Choose a File </label> */}
      </TitleArea>
      <Form id = "form-container">

        <section className="scroll-container">
          <h1>Cadastrar Set de item</h1>

          <div className="field-container">
            <h1>Nome</h1>
            <input type="text" />
          </div>

          <div className="two-field-container">
            <div>
              <h1>Disponível</h1>
              <input type="text"/>
          </div>

            <div>
              <h1>Quantidade</h1>
              <input type="text"/>
            </div>
          </div>
        
          <div className="field-container">
            <h1>Descrição</h1>
            <input type="text"/>
          </div>

        </section>

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
 

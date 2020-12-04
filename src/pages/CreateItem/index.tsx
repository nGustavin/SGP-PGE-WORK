import React from 'react'
import Header from '../../components/Header/index'
import {Container, Main} from '../../styles/pages/createItem'

export default function CreateItem() { 
  return(
    <>
      <Header/>
      <Container>
      
        <Main>
          <section className="form-container">
            <h1 className="form-title">Cadastrar item</h1>

            <div className="field-container">
              <h1>Descrição</h1>
              <input type="text" />
            </div>
            <div className="field-container">
              <h1>Patrimonio</h1>
              <input type="text" />
            </div>
            <div className="field-container">
              <h1>Sala</h1>
              <input type="text" />
            </div>
        </section>
        <div className="send-data-container">
          <input type="button" className="add-field" value="Adicionar Campo Personalizado" onClick={() => {console.log('hello')}}/>
          <input type="button" className="add-field" value="Cadastrar modelo de Item" />
        </div>
        </Main>
      </Container>
    </>
  )
}
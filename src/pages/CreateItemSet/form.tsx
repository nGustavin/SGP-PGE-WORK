import React, { FormEvent, useState } from 'react'
import Header from '../../components/Header/index'
import { Container, Main, TitleArea } from '../../styles/pages/form'
import api from '../../services/api'


export default function ItemSetForm() { 
  
  const [ name, setName] = useState('')
  const [ description, setDescription] = useState('') 
  const [ amount, setAmount] = useState('')
  const [ avaliable, setAvaliable] = useState('')
  const [ customSetFields, setCustomSetFields] = useState('')

  async function onSubmit(event: FormEvent){

    event.preventDefault()

    console.log({
      name,
      description,
      amount,
      avaliable,
      customSetFields
    })

    const data = new FormData()

    data.append('name', name)
    data.append('description', description)
    data.append('amount', amount)
    data.append('avaliable', avaliable)
    data.append('customSetFields', customSetFields)

    await api.post('item-sets', data)

    alert('Cadastro realizado com sucesso!')

  }

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
          <form id="form" onSubmit={onSubmit}>

              <div className="field-container">
                <label>Nome</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}  
                />
              </div>

              <div className="field-container">
                <label>Descricao</label>
                <input
                  name="description"
                  type="text"
                  value={description}
                  onChange={e => setDescription(e.target.value)}  
                />
              </div>

              <div className="field-container">
                <label>Disponivel</label>
                <input
                  name="avaliable"
                  type="text"
                  value={avaliable}
                  onChange={e => setAvaliable(e.target.value)}  
                  
                />
              </div>
              
              <div className="field-container">
                <label>Quantidade</label>
                <input
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}  
                />
              </div>

              <div className="field-container">
                <label>Custom Field</label>
                <input
                  name="customField"
                  type="text"
                  value={customSetFields}
                  onChange={e => setCustomSetFields(e.target.value)}  
                />
              </div>
              
              <div className="submit-container">
                <button type="submit">Criar Set</button>
                <button type="button">Adicionar Campo</button>
              </div>
          
          </form>
    </Main>
    </Container> 
    </>
  )
}
 

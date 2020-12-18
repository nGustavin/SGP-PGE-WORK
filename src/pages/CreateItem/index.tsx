import React, { FormEvent, useState } from 'react'
import Header from '../../components/Header/index'
import api from '../../services/api'
import {Container, Main} from '../../styles/pages/createItem'

// onSubmit={onSubmit}
interface item{
  name: string;
  id: string;
}


export default function CreateItem() { 


  const [ patrimony, setPatrimony ] = useState('')
  const [ about, setAbout ] = useState('')
  const [ room, setRoom ] = useState('')
  const [ name, setName] = useState('')
  const [ amount, setAmount] = useState('')
  const [ avaliable, setAvaliable] = useState('')
  const [ customFields, setCustomFields ] = useState('')
  // const [ avaliable, setAvaliable] = useState('')

  
  async function onSubmit(event: FormEvent){

    event.preventDefault()

    

    const data = new FormData()

    data.append('name', name)
    data.append('avaliable', avaliable)
    data.append('patrimony', patrimony)
    data.append('about', about)
    data.append('room', room)
    data.append('customFields', customFields)

    // useEffect(() => {
      // api.get('/items').then(response =>{
        // console.log(response.data)
      // })
    // }, [])
    console.log({name, amount, avaliable, patrimony, about, room, customFields})

    await api.post('/items', data)

    //http://localhost:3333/items

    alert('Cadastro realizado com sucesso!')

  }

  return(
    <>
      <Header haveArrowLeft/>
      <Container>
      
        <Main>
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
            <label>Patrimonio</label>
            <input
              name="patrimony"
              type="text"
              value={patrimony}
              onChange={e => setPatrimony(e.target.value)}  
            />
          </div>

          <div className="field-container">
            <label>Descricao</label>
            <input
              name="about"
              type="text"
              value={about}
              onChange={e => setAbout(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label>Sala</label>
            <input
              name="room"
              type="text"
              value={room}
              onChange={e => setRoom(e.target.value)}  
              
            />
          </div>
          <div className="field-container">
            <label>Campo Personalizado</label>
            <input
              name="customFields"
              type="text"
              value={customFields}
              onChange={e => setCustomFields(e.target.value)}  
              
            />
          </div>

          <div className="submit-container">
            <button type="submit">Criar Item</button>
            <button type="button">Adicionar Campo</button>
          </div>

          </form>
        </Main>
      </Container>
    </>
  )
}
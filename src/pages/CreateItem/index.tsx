import React, { FormEvent, useState } from 'react'
import Header from '../../components/Header/index'
import api from '../../services/api'
import {Container, Main} from '../../styles/pages/createItem'

// onSubmit={onSubmit}

export default function CreateItem() { 


  const [ patrimony, setPatrimony] = useState('')
  const [ about, setAbout] = useState('')
  const [ room, setRoom] = useState('')
  const [customFields, setCustomFields ] = useState('')
  // const [ avaliable, setAvaliable] = useState('')

  async function onSubmit(event: FormEvent){

    event.preventDefault()

    console.log({
      patrimony,
      about,
      // avaliable,
      room,
      customFields
    })

    const data = new FormData()

    data.append('patrimony', patrimony)
    data.append('about', about)
    // data.append('avaliable', avaliable)
    data.append('room', room)
    data.append('customFields', customFields)

    await api.post('items', data)

    alert('Cadastro realizado com sucesso!')

  }


  return(
    <>
      <Header/>
      <Container>
      
        <Main>
        <form id="form" onSubmit={onSubmit}>

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
            <button type="submit">Criar Set</button>
            <button type="button">Adicionar Campo</button>
          </div>

          </form>
        </Main>
      </Container>
    </>
  )
}
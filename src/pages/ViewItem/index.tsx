import React, { useEffect, useState } from 'react';

import {Container , Wrapper} from './styles'
import Header from '../../components/Header'
import {useParams} from 'react-router-dom'

import monitorImage from '../../utils/images/monito.jpg'
import api from '../../services/api';

interface Item {
  patrimony: number;
  avaliable: boolean;
  room: number;
  about: string;
  id: string;
  name: string
}

interface params{
  id: string;
}

export default function ItemView(){

  const [item, setItem] = useState<Item>()

  const params = useParams<params>()

  useEffect(() => {
    api.get(`/items/${item?.id}`).then(response => {
      setItem(response.data)
      console.log(response.data)
    })
  }, [params.id])

  return(
    <Container>
      <Header haveArrowLeft/>
      <Wrapper>
        <div className="top-content">
          <img src={monitorImage} alt={item?.name} />
          <h1>{item?.name}</h1>
        </div>
        <div className="bottom-content">
          <h1>Patrimonio: <strong> {item?.patrimony} </strong></h1>
          <h1>Disponivel: <strong> {item?.avaliable} </strong></h1>
          <h1>Sala: <strong> {item?.room} </strong></h1>
          <h1>Descricao: <strong> {item?.about} </strong></h1>
        </div>
      </Wrapper>
    </Container>
  )
}
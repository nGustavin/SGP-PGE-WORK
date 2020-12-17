import React, { useEffect, useState } from 'react'
import {Container} from './styles'
import arrowLeft from '../../assets/Arrow2.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export interface Props{
  haveArrowLeft?: boolean 
}

interface itemSet {
  name: string;
  id: string;
  description: string
}



const Header: React.FC<Props> = ({haveArrowLeft}) => {
  const {goBack} = useHistory()

  const [ itemSets, setItemSets ] = useState<itemSet[]>([])

  useEffect(() => {
    api.get('item-sets').then(response => {
      setItemSets(response.data)
      console.log(response.data);
    })
  }, [])

  return(
    <Container haveArrowLeft={haveArrowLeft}>
      {haveArrowLeft? <img src={arrowLeft} alt="monitor positivo" onClick={goBack}/> : <div style={{width: 50}}></div>}
      <input list="sets" id="search-input" name="set-search" onClick={(e) => console.log(e.target)}/>

      <datalist id="sets">
        {itemSets.map(itemSet => {
          return(
            <Link to={`/item-sets/${itemSet.id}`}>
              <option id="list" key={itemSet.id} value={itemSet.name}/>
            </Link>
          )
        })}   
      </datalist>

      <h1 className="header-title">SGP-PGE</h1>
    </Container>
  )
}
    
export default Header
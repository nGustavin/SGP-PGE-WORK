import React from 'react'
import {Container} from './styles'
import arrowLeft from '../../assets/Arrow2.svg'
import { useHistory } from 'react-router-dom'


export interface Props{
  haveArrowLeft?: boolean 
}



const Header: React.FC<Props> = ({haveArrowLeft}) => {
  const {goBack} = useHistory()

  return(
    <Container haveArrowLeft={haveArrowLeft}>
      {haveArrowLeft? <img src={arrowLeft} alt="monitor positivo" onClick={goBack}/> : <div style={{width: 50}}></div>}
      <input type="text" id="search-input" name="set-search" onClick={(e) => console.log(e.target)}/>

      <h1 className="header-title">SGP-PGE</h1>
    </Container>
  )
}
    
export default Header
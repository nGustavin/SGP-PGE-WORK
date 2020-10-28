import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'


export const CreateItem = styled.div`
  width: 60px;
  height: 60px;
  background: #00A3FF;
  border-radius: 24px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 30px;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    border-radius: 19px;
    background: #5FC5FF;
  }
  
  :focus{
    outline: none;
    background: #00A3FF;
  }

`
export const CreateItemIcon = styled(FiPlus)`
  color: white;
  font-size: 34px;
`



// .create-item-button:focus{
//   outline: none;
//   background: #00A3FF;
// }
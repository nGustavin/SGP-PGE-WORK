import React from 'react'
import {CreateItem, CreateItemIcon} from'./styles'
import CreateItemSet from '../../pages/CreateItemSet/index'
import { Link } from 'react-router-dom'

interface Props{
  landing?: boolean;
}

const CreateItemButton: React.FC<Props> = ({landing}) => {
  return(
    <Link to="/create-set">
    <CreateItem>
      <CreateItemIcon className="crosshair-icon" />
    </CreateItem>
  </Link>
  )
}

export default CreateItemButton
  

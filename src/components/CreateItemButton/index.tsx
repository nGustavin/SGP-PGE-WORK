import React from 'react'
import {CreateItem, CreateItemIcon} from'./styles'
import { Link } from 'react-router-dom'

export interface ButtonProps{
  isSetScreen?: boolean;  
}

const CreateItemButton: React.FC  <ButtonProps> = (ButtonProps) => {
  return(
    <Link to="/create-item-set">
    <CreateItem>
      <CreateItemIcon className="crosshair-icon" />
    </CreateItem>
  </Link>
  )
}

export default CreateItemButton
  



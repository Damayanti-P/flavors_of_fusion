// import { MenuItem } from '@mui/material'
import React from 'react'
import MenuItems from '../components/MenuItems'
import { useAppContext } from '../features/AppProvider';

const Menu = () => {
  const {selectedCategory}=useAppContext();
  return (
    <div className='main-menu-container'>
      <div className='main-menu-inner'>
        
      <MenuItems initialTabKey={selectedCategory} />
      </div>
    </div>
  )
}

export default Menu

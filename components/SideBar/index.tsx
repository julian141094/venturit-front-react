import React from 'react'
import styled from 'styled-components'
import SidebarItem from '../basics/SidebarItem'

const SidebarContainer = styled.div`
  width: 55px;
  min-height: 100%;
  background-color: ${props => props.theme.colors.primaryBlue};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`

const index = () => {
  //Const 
  const menuItems = [
    {
      url: '/img/menu/Home - Iconly---Bold Copy.png',
      active: false,
    },
    {
      url: '/img/menu/Home - Iconly---Bold.png',
      active: true,
    },
    {
      url: '/img/menu/Home - Iconly---Bold Copy.png',
      active: false,
    },
    {
      url: '/img/menu/Home - Iconly---Bold Copy.png',
      active: false,
    },
    {
      url: '/img/menu/Home - Iconly---Bold Copy.png',
      active: false,
    },
    {
      url: '/img/menu/Home - Iconly---Bold Copy.png',
      active: false,
    },
  ]
  
  return (
    <SidebarContainer>
      {menuItems.map((item, index) => <SidebarItem key={index} iconUrl={item.url} active={item.active} />)}
    </SidebarContainer>
  )
}

export default index

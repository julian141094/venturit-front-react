import React from 'react'
import styled from 'styled-components'
import Image from '../Image'

type SidebaItemProps = {
  active ?: boolean,
  iconUrl : string,
}

const ItemArea = styled.div`
  padding: 22px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.active ? props.theme.colors.secondaryBlue : props.theme.colors.primaryBlue};
`

const index = ( { active, iconUrl } : SidebaItemProps ) => {
  return (
    <ItemArea active={active}>
      <Image src={iconUrl} width={'20px'} height={'20px'} />
    </ItemArea>
  )
}

export default index

import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'

const UserArea = styled.div`
  width: 235px;
  display: flex;
  align-items: center;
  padding-right: 33px;
  margin-left: 10px;
`

const NameText = styled.span`
  height: 26px;
  width: 118px;
  color: ${props => props.theme.colors.thyrdBlue};
  font-family: Nunito;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  margin-right: 6px;
`

const ContainerArrow = styled.div`
  padding-left: 5px;
`

const index = () => {
  return (
    <UserArea>
      <NameText>
        Clarence Russell
      </NameText>
      <Image src={'/img/Picture@2x.png'} width={'56px'} height={'57px'} />
      <ContainerArrow>
        <Image src={'/img/Arrow---Down-2 - Iconly---Bold@3x.png'} width={'17px'} height={'17px'} />
      </ContainerArrow>
    </UserArea>
  )
}

export default index

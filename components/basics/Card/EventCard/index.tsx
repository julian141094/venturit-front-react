import React from 'react'
import styled from 'styled-components'
import Card from '../index'
import Image from '../../Image'
import { Normal, OtherTitle, OtherSubTitle } from '../../Text'

type EventCardProps = {
  url: string,
  title: string,
  text: string,
}

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 19px;
`

const index = ( { url, title, text }: EventCardProps ) => {
  return (
    <Card width={'100%'} height={'109px'} padding={'20px'} margin={'20px 0px 0px 0px'}>
      <ContainerCard>
        <Image src={url} height={'62px'} width={'62px'} />
        <ContainerText>
          <OtherSubTitle>{text}</OtherSubTitle>
          <OtherTitle>{title}</OtherTitle>
        </ContainerText>
      </ContainerCard>
    </Card>
  )
}

export default index

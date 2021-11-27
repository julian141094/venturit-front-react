import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'
import { Title, Normal } from '../../../basics/Text'

const BannerArea = styled.div`
  width: 100%;
  height: 146px;
  margin-top: 32px;
  border-radius: 15px;
  background: url('/img/Headers/header-4.png');
  background-size: cover;
  background-repeat: no-repeat;
`

const ContainerImage = styled.div`
  position: absolute;
  margin-top: -59px;
`

const ContainerText = styled.div`
  padding-left: 242px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const OtherTitle = styled(Title)`
  color: white;
`

const OtherNormal = styled(Normal)`
  color: white;
  font-family: "Apple Color Emoji";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 26px;
`

const index = () => {
  return (
    <BannerArea>
      <ContainerImage>
        <Image src={'/img/Group 9.png'} width={'222px'} height={'205px'} />
      </ContainerImage>
      <ContainerText>
        <OtherTitle>Welcome back, Clearence</OtherTitle>
        <OtherNormal>Ta-da! You're up to date. 🥳</OtherNormal>
      </ContainerText>
    </BannerArea>
  )
}

export default index

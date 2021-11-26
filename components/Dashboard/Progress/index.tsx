import React from 'react'
import styled from 'styled-components'
import Container from '../../basics/containers/Container'
import { Title, BannerProgressText, ProgressText } from '../../basics/Text'
import Separator from '../../basics/Separator'
import ProgressCard from '../../basics/Card/ProgressCard'
import ProgressBar from './ProgressBar'

const ProgressCardContainer = styled.div`
  width: 60%;
  padding: 0px 0px 0px 72px;
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  margin-right: 10px;
`

const BannerArea = styled.div`
  width: 100%;
  height: 66px;
  margin-top: 59px;
  border-radius: 5px;
  background: url('/img/Oval + Oval + Oval Mask@3x.png');
  background-size: cover;
  background-repeat: no-repeat;
`

const ContainerText = styled.div`
  padding-left: 87px;
  height: 100%;
  display: flex;
  align-items: center;
`



const index = () => {
  //Const
  const data = [
    {
      text: 'Total Webinars',
      number: 9,
      actived: false
    },
    {
      text: 'Pending Assignments',
      number: 0,
      actived: false
    },
    {
      text: 'Total Units',
      number: 5,
      actived: false
    },
  ]
  const data2Row = [
    {
      text: 'Total Class',
      number: 12,
      actived: false
    },
    {
      text: 'Total Readings',
      number: 14,
      actived: false
    },
    {
      text: 'Total Videos',
      number: 5,
      actived: true
    },
  ]

  return (
    <Container padding={'36px 0px 0px 0px'} >
      <Container>
        <ProgressBar/>
        <ProgressCardContainer >
          <Container padding={'0px 0px 24px 0px'}>
            <TitleContainer>
              <Title>Progress</Title>
            </TitleContainer>
            <Separator/>
          </Container>
          <Container>
            {data.map((item, index) =>  <ProgressCard key={index} text={item.text} number={item.number} actived={item.actived} />)}
          </Container>
          <Container padding={'24px 0px 0px 0px'}>
            {data2Row.map((item, index) =>  <ProgressCard key={index} text={item.text} number={item.number} actived={item.actived} />)}
          </Container>
          <BannerArea>
            <ContainerText>
              <BannerProgressText>
                Confirm your account details. Please confirm your email and phone number. 😰 
              </BannerProgressText>
            </ContainerText>
          </BannerArea>
        </ProgressCardContainer>
      </Container>
    </Container>
  )
}

export default index

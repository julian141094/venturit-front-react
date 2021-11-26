import React from 'react'
import styled from 'styled-components'
import EventCard from '../../../basics/Card/EventCard'
import Separator from '../../../basics/Separator'
import { SubTitle, OtherTitle, OtherSubTitle } from '../../../basics/Text'
import Container from '../../../basics/containers/Container'

const ContainerList = styled.div`
  margin-left: 23px;
  width: 25%;
`

const ContainerTitleArea = styled.div`
  width: 100%;
  display: flex;
`

const ContainerTitle = styled.div`
  width: 45%;
`

const index = () => {
  //Const 
  const data = [
    {
      url: '/img/thumb-notification.png',
      title: 'Webinar: the basic of...', 
      text: '10:30AM',
    },
    {
      url: '/img/thumb-notification2.png',
      title: 'Team Building Activity 🔥', 
      text: '10:30AM',
    },
  ]

  return (
    <ContainerList>
      <ContainerTitleArea>
        <ContainerTitle type={'row'}>
          <SubTitle>EVENTS TO</SubTitle>
        </ContainerTitle>
        <Separator/>
      </ContainerTitleArea>
      {data.map((item, index) => <EventCard key={index} url={item.url} title={item.title} text={item.text} />)}
    </ContainerList>
  )
}

export default index

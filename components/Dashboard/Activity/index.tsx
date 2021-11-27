import React from 'react'
import styled from 'styled-components'
import Container from '../../basics/containers/Container'
import { Title } from '../../basics/Text'
import Separator from '../../basics/Separator'
import Card from '../../basics/Card/ActivityCard'
// import Card from '../../basics/Card'

const TitleContainer = styled.div`
  margin-right: 10px;
`

const ArrowButtonContainer = styled.div`
  height: 32px;
  width: 47px;
  border-radius: 5px;
  background-color: rgba(157,155,182,0.17);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  color: ${props => props.theme.colors.fivethText};
  font-family: Feather-Icons;
  font-size: 15px;
  letter-spacing: -0.43px;
  line-height: 26px;
  text-align: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0px 0px 0px;
`

const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`


const index = () => {
  //Const 
  const data = [
    {
      url: '/img/ic-followers@2x.png',
      title: 'You have new 5 followers including',
      text: ` is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem`,
      open: true,
    },
    {
      url: '/img/ic-events@3x.png',
      title: '3 new events were added to your calendar',
      text: 'Testinggggggggggggggg',
      open: false,
    },
    {
      url: '/img/ic-assignments@3x.png',
      title: '3 new events were added to your calendar 🤓',
      text: 'Testinggggggggggggggg 222222',
      open: false,
    },
  ]
  
  return (
    <>
      <CardContainer>
        <Container>
          <TitleContainer>
            <Title>Activity</Title>
          </TitleContainer>
          <Separator/>
          <ArrowButtonContainer>
            {'>'}
          </ArrowButtonContainer>
        </Container>
      </CardContainer>
      <CardItemsContainer> 
        {data.map((item, index) => <Card 
          key={index}
          url={item.url} 
          title={item.title} 
          text={item.text}
          opened={item.open}
        />)}
      </CardItemsContainer>
    </>
  )
}


export default index
import React from 'react'
import styled from 'styled-components'
import { Title } from '../../basics/Text'
import Container from '../../basics/containers/Container'
import Slider from '../../Slider'
import ListEvents from './List'

const EventsContainer = styled.div`
  width: 100%;
  margin-top: 36px;
  background-color: red;
`

const index = () => {
  return (
    <Container margin={'36px 0px 0px 0px'} type={'column'}>
      <Title>Events</Title>
      <Container type={'row'} margin={'36px 0px 0px 0px'}>
        <Slider/>
        <ListEvents/>
      </Container>
    </Container>
  )
}

export default index

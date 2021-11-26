import React from 'react'
import styled from 'styled-components'
import Container from '../../../basics/containers/Container'
import { Title, ProgressDataTitle, ProgressDataNumber, ProgressDataMeassure } from '../../../basics/Text'

type ProgressDataProps = {
  title: string,
  number: string | number,
  meassure: string,
  badgeAlert: boolean,
}

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
`

const Badge = styled.div`
  height: 13px;
  width: 13px;
  background-color: #FED200;
  border-radius: 25px;
  margin-right: 7px;
`

const index = ( { title, number, meassure, badgeAlert = true } : ProgressDataProps ) => {
  return (
    <Container type={'column'}>
      <ContainerTitle>
        <Badge/>
        <ProgressDataTitle>Completed</ProgressDataTitle>
      </ContainerTitle>
      <ContainerTitle>
        <ProgressDataNumber>20</ProgressDataNumber>
        <ProgressDataMeassure>hours</ProgressDataMeassure>
      </ContainerTitle>
    </Container>
  )
}

export default index

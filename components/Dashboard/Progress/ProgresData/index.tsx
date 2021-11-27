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

type OtherProps = {
  readonly badgeAlert: boolean;
}

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
`

const Badge = styled.div<OtherProps>`
  height: 13px;
  width: 13px;
  background-color: ${props => props.badgeAlert ? props.theme.colors.primaryYellow : props.theme.colors.primaryOrange};
  border-radius: 25px;
  margin-right: 7px;
`

const index = ( { title, number, meassure, badgeAlert = true } : ProgressDataProps ) => {
  return (
    <Container type={'column'}>
      <ContainerTitle>
        <Badge badgeAlert={badgeAlert}/>
        <ProgressDataTitle>{title}</ProgressDataTitle>
      </ContainerTitle>
      <ContainerTitle>
        <ProgressDataNumber>{number}</ProgressDataNumber>
        <ProgressDataMeassure>{meassure}</ProgressDataMeassure>
      </ContainerTitle>
    </Container>
  )
}

export default index

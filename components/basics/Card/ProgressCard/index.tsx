import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '../index'
import { CardProgressText, CardProgressNumber } from '../../Text'

type ProgressCardProps = {
  text: string,
  number: number,
  actived: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  padding: 19px;
`

const TextContainer = styled.div`
  width: 80%;
`

const DigitContainer = styled.div`
  width: 20%;
`

const ActiveText = styled(CardProgressText)`
  color: white;
`

const DigitActiveText = styled(CardProgressNumber)`
  color: white;
`

const index = ( { text, number, actived = false} : ProgressCardProps ) => {
  return (
    <Card 
      width={'33%'} 
      height={'79px'}
      color={actived ? '#1884FF' : 'white'} margin={'0px  31px 0px 0px'}
    >
      <Container>
        <TextContainer>
          {
            actived ? (
              <ActiveText>
                {text}
              </ActiveText>
            ) : (
              <CardProgressText>
                {text}
              </CardProgressText>
            )
          }
        </TextContainer>
        <DigitContainer>
          {
            actived ? (
              <DigitActiveText>
                {number}
              </DigitActiveText>
            ) : (
              <CardProgressNumber>
                {number}
              </CardProgressNumber>
            ) 
          }
        </DigitContainer>
      </Container>
    </Card>
  )
}

export default index

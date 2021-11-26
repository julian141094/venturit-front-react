import { type } from 'os'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick : any,
  margin ?: string,
  text : string
}

const ButtonContainer = styled.div`
  min-width: 79px;
  height: 46px;
  background-color: ${props => props.theme.colors.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  margin: ${props => props.margin || '0px'};
`

const Text = styled.span`
  height: 13px;
  width: 43px;
  color: #FFFFFF;
  font-family: Gotham;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 16px;
  text-align: center;
`

const index = ( {onClick, margin, text} : ButtonProps ) => {
  return (
    <ButtonContainer margin={margin} onClick={() => onClick()}>
      <Text>
        {text}
      </Text>
    </ButtonContainer>
  )
}

export default index

import React from 'react'
import styled from 'styled-components'

const ContainerSeparator = styled.div`
  width: 100%;
  min-height: 26px;
  display: flex;
  align-items: center;
`
  
const Separator = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.thyrdGray};
`

const index = () => {
  return (
    <ContainerSeparator>
      <Separator/>
    </ContainerSeparator>
  )
}

export default index

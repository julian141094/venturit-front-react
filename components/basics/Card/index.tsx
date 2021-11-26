import React from 'react'
import styled from 'styled-components'

type CardProps = {
  children ?: any,
  width ?: string,
  height ?: string,
  padding ?: string,
  margin ?: string,
  shadow ?: string,
  color ?: string,
}

const CardArea = styled.div`
  box-shadow: ${props => props.shadow ? props.shadow : '0px 8px 16px 0px rgba(0, 0, 0, 0.2)'};
  width: ${props => props.width ? props.width : '161px'};
  height: ${props => props.height ? props.height : '76px'};
  padding: ${props => props.padding ? props.padding : '0px'};
  margin: ${props => props.margin ? props.margin : '0px'};
  background-color: ${props => props.color ? props.color : 'white'};
  border-radius: 5px;
`

const index = ( {children, height, width, padding, shadow, margin, color } : CardProps ) => {
  return (
    <CardArea 
      height={height} 
      width={width} 
      padding={padding} 
      shadow={shadow}
      margin={margin}
      color={color}
    >
      {children}
    </CardArea>
  )
}

export default index

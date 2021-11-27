import React from "react"
import styled from "styled-components"

type InputProps = {
  onChange : any,
}

const Element = styled.input`
  background-color: transparent;
  width: 100%;
  border-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder  {
    color: ${props => props.theme.colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
  }
`

/**
 * @name Input
 * @description Text input component by type
 * @returns Component
 */
const Input = ({onChange } : InputProps) => {
  return  (
    <Element 
      onChange={e => onChange(e)}
      placeholder={'Search and Find'}
    />
  )
}

export default Input
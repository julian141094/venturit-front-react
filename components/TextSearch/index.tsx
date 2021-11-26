import React, {useCallback, useState} from "react"
import styled from "styled-components"
import Image from "../basics/Image"
import Input from "../basics/TextInput"
import Container from "../basics/containers/Container"


const Area = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.secondaryText};
  width: 311px;
  height: 46px;
  display: flex;
  flex-direction: 'row';
  padding: 14px;
`

/**
 * @name TextSearch
 * @description Text input search 
 * @returns Component
 */
const TextSearch = () => {
  // Consts
  const [filterValue, setFilterValue] = useState('')

  return (
    <Area>
      <Container padding={'0px 17.06px'}>
        <Input onChange={event => setFilterValue(event.target.value)}/>
      </Container>
      <Image src={'/img/search.png'} width={'14px'} height={'14px'}/>
    </Area>
  )
}

export default TextSearch 
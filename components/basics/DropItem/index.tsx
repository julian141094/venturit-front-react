import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'

type DropItemProps = {
  url  : string,
  title  : string,
  text: string
}

const ItemArea = styled.div`
  height: 67px;
  width: 100%;
  display: flex;
  padding-top: 26px;
`

const ItemTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  justify-content: center;
`

const TitleSpan = styled.span`
  height: 15px;
  color: ${props => props.theme.colors.secondaryBlue};
  font-family: Gilroy-Bold;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 19px;
`

const NormalSpan = styled.span`
  height: 13px;
  color: ${props => props.theme.colors.secondaryGray};
  font-family: Gilroy-Bold;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 16px;
`

const index = ( { url, title, text } : DropItemProps ) => {
  return (
    <ItemArea>
      <Image src={url} width={'49px'} height={'49px'}/>
      <ItemTextArea>
        <TitleSpan>
          {title}
        </TitleSpan>
        <NormalSpan>
          {text}
        </NormalSpan>
      </ItemTextArea>
    </ItemArea>
  )
}

export default index

import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '../index'
import Container from '../../containers/Container'
import Image from '../../Image'
import { OtherSubTitle, CardContentText } from '../../Text'

type ActivityCardProps = {
  url : string,
  title : string,
  text : string,
  opened : boolean,
}

const ContainerImage = styled.div`
  padding: 14px 17px 0px 20px;
`
const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 25px;
`

const ContainerHeader = styled.div`
  display: flex;
`

const ContainerBody = styled.div`
  display: flex;
  padding: 6px 65px 10px 78px;
`

const index = ( { url, title, text, opened = false } : ActivityCardProps ) => {
  //Const 
  const [open, setOpen] = useState(opened)

  //Normal Functions
  function handleClickOpen(val : boolean) {
    setOpen(val)
  }

  return (
    <Card width={'100%'} margin={'15px 0px;'} height={'auto'}>
      <Container type={'column'} padding={'0px 0px 14px 0px'}>
        <ContainerHeader onClick={() => handleClickOpen(!open)}>
          <ContainerImage>
            <Image src={url} width={'41px'} height={'41px'}/>
          </ContainerImage>
          <ContainerTitle>
            <OtherSubTitle>
              {title}
            </OtherSubTitle>
            <Image 
              src={
                !open ? '/img/Arrow---Down-2 - Iconly---Bold@3x.png' : 
                '/img/Arrow---Right-2 - Iconly---Bold@3x.png'
              } 
              width={'15px'} 
              height={'15px'}
            />
          </ContainerTitle>
        </ContainerHeader>
        {
          open ? (
            <ContainerBody>
              <CardContentText>
                {text}
              </CardContentText>
            </ContainerBody>
          ) : null
        }

      </Container>
    </Card>
  )
}

export default index

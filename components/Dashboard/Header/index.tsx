import React from 'react'
import styled from 'styled-components'
import Container from '../../basics/containers/Container'
import Card from '../../basics/Card'
import { Title, Normal, SubTitle } from '../../basics/Text'
import Image from 'next/dist/client/image'
import Banner from './Banner'

const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OtherTitle = styled(Title)`
  font-size: '24px';
  padding-left: 5px;
`

const index = () => {
  return (
    <Container type={'column'}>
      <ContainerTitle>
        <Title>Dashboard</Title>
        <Card 
          padding={'20px 25px 17px 25px'} 
          width={'190px'} 
          height={'90px'}
        >
          <Container type={'column'}>
            <Normal>Currently Learning</Normal>
            <Container type={'row'}>
              <Image src={'/img/Screen Shot 2020-09-24 at 3.34.23 PM@2x.png'} width={'30px'} height={'15px'}/>
              <OtherTitle>English</OtherTitle>
            </Container>
          </Container>
        </Card>
      </ContainerTitle>
      <Banner/>
    </Container>
  )
}

export default index

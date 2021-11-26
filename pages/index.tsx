import type { NextPage } from 'next'
import RootContainer from '../components/basics/RootContainer'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Sidebar from '../components/SideBar'
import Content from '../screens/Dashboard'

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
` 

const Home: NextPage = () => {
  return (
    <RootContainer>
      <Nav/>
      <ContentContainer>
        <Sidebar/>
        <Content/>
      </ContentContainer>
    </RootContainer>
  )
}

export default Home

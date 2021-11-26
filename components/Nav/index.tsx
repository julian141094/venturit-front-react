import React from 'react'
import styled from 'styled-components'
import Image from '../basics/Image'
import TextSearch from '../TextSearch'
import Button from '../basics/Button'
import DropDownMenu from '../DropDownMenu'
import UserInformation from '../UserInformation'

const NavContainer = styled.div`
  height: 79px;
  width: 100vw;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  padding-left: 12px;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Spacer = styled.div`
  width: 222px;
  height: 45px;
  background-color: red;
`

const index = () => {
  //Const
  const notification = [
    {
      url: '/img/thumb-notification2.png',
      title: 'You have a new session to requir…',
      text: 'Today, 10:30AM',
    },
    {
      url: '/img/thumb-notification-1.png',
      title: 'You have a new session to requir…',
      text: 'Today, 10:30AM',
    },
    {
      url: '/img/thumb-notification.png',
      title: 'You have a new session to requir…',
      text: 'Today, 10:30AM',
    }
  ]
  const messages = [
    {
      url: '/img/Picture@2x.png',
      title: 'Hi Danny, how are you ?',
      text: 'Today, 10:30AM',
    },
    {
      url: '/img/Picture@2x.png',
      title: 'I have a question',
      text: 'Today, 10:35AM',
    },
    {
      url: '/img/Picture@2x.png',
      title: 'This is a test',
      text: 'Today, 10:35AM',
    }
  ]

  //Normal functions
  function handleClick() {
    console.log('the user make a click');
  }

  return (
    <NavContainer>
      <LogoContainer>
        <Image src='./img/Group@1,5x.svg' width='167px' height='46px'/>
      </LogoContainer>
      <TextSearch/>
      <RightContainer>
        <Button onClick={handleClick} text={'+ ADD'} margin={'0px 40px 0px 0px'}/>
        <DropDownMenu urlIcon={'/img/Notification-Iconly---Bold@2x.png'} badge data={notification} />
        <DropDownMenu urlIcon={'/img/Chat - Iconly---Bold@2x.png'} data={messages} type={'message'} />
        <UserInformation/>
      </RightContainer>
    </NavContainer>
  )
}

export default index

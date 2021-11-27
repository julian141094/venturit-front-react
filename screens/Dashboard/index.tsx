import React from 'react'
import styled from 'styled-components'
import DashboardHeader from '../../components/Dashboard/Header'
import Events from '../../components/Dashboard/Events'
import Activitys from '../../components/Dashboard/Activity'
import Progress from '../../components/Dashboard/Progress'

const ContentArea = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 22px 26px 44px 87px;
`

const index = () => {
  return (
    <ContentArea>
      <DashboardHeader/>
      <Events/>
      <Activitys/>
      <Progress/>
    </ContentArea>
  )
}

export default index

import React from 'react'
import styled from 'styled-components'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import { Title, ProgressText } from '../../../basics/Text';
import ProgressData from '../ProgresData'

const ProgressBarContainer = styled.div`
  width: 40%;
  background-color: ${props => props.theme.colors.fourthBlue};
  padding: 22px 36px;
  border-radius: 7px;
  box-shadow: 6px 32px 45px 0 rgba(36,53,157,0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgressContainer = styled.div`
  width: 159.15px;
  height: 159.15px;
  display: flex;
`

const ProgressDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 105px; */
  min-width: 332px;
  border-radius: 19px;
  margin-top: 17px;
  padding: 24px;
  background-color: rgba(198,198,205,0.13);
`

const ProgressTitle = styled(Title)`
  color: ${props => props.theme.colors.white};
  padding-bottom: 26px;
`

const TextArea = styled.div`
  position: absolute;
  margin-top: 65px;
  margin-left: 50px;
`

const VerticalSeparator = styled.div`
  width: 1px;
  height: 50px;
  background-color: white;
  margin: 0px 25px;
`

const index = () => {
  const percentage = 40;
  return (
    <ProgressBarContainer>
      <ProgressTitle>
        Progress overview
      </ProgressTitle>
      <ProgressContainer>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            textColor: "white",
            pathColor: "#FED200",
            trailColor: "#FF794F",
            textSize: "24px",
          })}
        />
        <TextArea>
          <ProgressText>
            40%
          </ProgressText>
        </TextArea>
      </ProgressContainer>
      <ProgressDataContainer>
        <ProgressData/>
        <VerticalSeparator/>
        <ProgressData/>
      </ProgressDataContainer>
    </ProgressBarContainer>
  )
}

export default index

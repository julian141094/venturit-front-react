import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Title, CardProgressNumber } from '../basics/Text';

type DataProps = {
  text: string,
  stext: string,
} 

const ContainerSlider = styled.div`
  background-color: orange;
  width: 75%;
  max-height: 290px;
  border-radius: 15px;

   & div.legend {
     background-color: transparent !important;
   }
`

const MaskDataArea = styled.div`
  height: 70%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageText = styled(CardProgressNumber)`
  color: ${props => props.theme.colors.white};
`

const ImageTextContainer = styled.div`
  max-width: 270px;
`

const ImageInformation = ( { stext, text } : DataProps ) => {
  return (
    <MaskDataArea className="legend">
      <ImageTextContainer>
        <ImageText>{text}</ImageText>
      </ImageTextContainer>
      <ImageText>{stext}</ImageText>
    </MaskDataArea>
  )
}

const index = () => {
  return (
    <ContainerSlider>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
            <img src="/img/3000434@3x.png" height={'290px'} />
            <ImageInformation text={'Youth Talent & Education'} stext={'May, 20'}/>
        </div>
        <div>
            <img src="/img/3000434@3x.png" height={'290px'}/>
            <ImageInformation text={'Testing the carousel xD'} stext={'Nov, 26'}/>
        </div>
        <div>
            <img src="/img/3000434@3x.png" height={'290px'}/>
            <ImageInformation text={'Hello Danny, how are you?'} stext={'Nov, 26'}/>
        </div>
    </Carousel>
    </ContainerSlider>
  )
}

export default index

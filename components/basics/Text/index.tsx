import styled from "styled-components"

export const Normal = styled.span`
  color: ${props => props.theme.colors.thyrdText};
  font-family: Gilroy-Bold;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
`

export const Title = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-family: Gotham;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.86px;
  line-height: 36px;
`

export const OtherTitle = styled.span`
  color: ${props => props.theme.colors.FourthText};
  font-family: Gilroy-Bold;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
`

export const SubTitle = styled.span`
  color: ${props => props.theme.colors.primaryText};
  opacity: 0.86;
  font-family: Gotham;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 26px;
`

export const OtherSubTitle = styled.span`
  color: ${props => props.theme.colors.thyrdText};
  font-family: Nunito;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
`

export const CardContentText = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-family: Nunito;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 25px;
`

export const CardProgressText = styled.span`
  color: ${props => props.theme.colors.sixthText};
  font-family: Gotham;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.49px;
  line-height: 18px;
`

export const CardProgressNumber = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-family: Gotham;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -1.14px;
  line-height: 48px;
  text-align: right;
`

export const BannerProgressText = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: Nunito;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 26px;
`

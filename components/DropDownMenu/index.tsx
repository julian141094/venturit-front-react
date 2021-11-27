import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'
import DropItem from '../basics/DropItem'

type DropMenuProps = {
  urlIcon  : string,
  data  : any,
  badge ?: boolean,
  type ?: string,
}

type OtherProps = {
  readonly type?: string;
}

const ContainerIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BadgeIcon = styled.div`
  background-color: ${props => props.theme.colors.primaryBlue};
  border-radius : 20px;
  height: 13px;
  width: 13px;
  position: absolute;
  margin-bottom: -12px;
  margin-right: -30px;
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: left;
`; 

const DropDownContent = styled.div<OtherProps>`
  padding: 0px 24px 24px 24px;
  right: ${props => props.type === 'message' ? '255px' : '290px'};
  display: none;
  position: absolute;
  background-color: white;
  min-width: 336px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const index = ( { urlIcon, data, badge = false, type } : DropMenuProps ) => {
  return (
    <StyledUl>
        <DropDownLi>
          <ContainerIcon>
            <Image src={urlIcon} width={'24px'} height={'24px'}/>
            {badge ? <BadgeIcon/> : null}
          </ContainerIcon>
          <DropDownContent type={type}>
            {" "}
            { data.map(
              (item : any, index : string) => <DropItem key={index} url={item.url} title={item.title} text={item.text} />) 
            }
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
  )
}

export default index

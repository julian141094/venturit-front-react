import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  /* overflow-y: hidden; */
`

export default RootContainer
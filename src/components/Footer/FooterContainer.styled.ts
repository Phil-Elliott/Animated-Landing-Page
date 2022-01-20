import styled from "styled-components"

export const FooterContainer = styled.div`
  padding-top: 15%;

  & div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8%;
  }

  & ul {
    list-style: none;
    display: flex;
  }

  & li {
    font-family: "Maven Pro", sans-serif;
    font-size: 11px;
    margin-left: 4rem;
  }

  @media only screen and (max-width: 1200px) {
    & ul {
      display: none;
    }
  }
`

export const Border = styled.img`
  padding-bottom: 2.5%;
  width: 100%;
`

export const Logo = styled.img``

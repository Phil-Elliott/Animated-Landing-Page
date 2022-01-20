import styled from "styled-components"

export const ContainerSix = styled.div`
  padding-top: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`
export const PictureContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 93%;

  @media only screen and (max-width: 1025px) {
    margin: 0 auto;
    width: 100%;
  }
`
export const Picture = styled.img`
  margin: 17% 0 0 13%;
  display: flex;
  width: 69%;
`
export const InfoContainer = styled.div`
  padding-bottom: 15%;

  & h1 {
    color: #2b3144;
    font-size: clamp(2rem, 12vw + 0.5rem, 5.75rem);
    line-height: 100%;
    max-width: 90%;
    padding: 85px 0 30px;
    text-transform: uppercase;
  }

  & p {
    font-size: 1rem;
    max-width: 60%;
    padding-bottom: 4.5%;
  }

  & h6 {
    font-family: "Maven Pro", sans-serif;
    font-size: 12px;
    padding-bottom: 7.5%;
  }

  & h5 {
    color: #414a69;
    font-family: "Maven Pro", sans-serif;
    font-size: 16px;
    font-weight: bolder;
  }

  @media only screen and (max-width: 1025px) {
    grid-column-start: 1;
    grid-row-start: 1;

    & p {
      max-width: 85%;
    }
  }
`
export const Border = styled.img`
  padding-bottom: 7.5%;
  width: 88%;
`
export const Arrow = styled.img`
  margin-left: 8%;
`
export const Car = styled.img`
  position: absolute;
  margin: 40% 0 0 11%;
  z-index: 2;

  @media only screen and (max-width: 1525px) {
    display: none;
  }
`

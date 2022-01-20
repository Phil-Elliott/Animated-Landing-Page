import styled from "styled-components"

export const ContainerFour = styled.div`
  padding-top: 35%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1525px) {
    padding-top: 100%;
  }

  @media only screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
    padding-top: 80%;
  }
`

export const CarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 65.5%;

  & div {
    padding-bottom: 93%;
  }
`

export const Car = styled.img`
  position: absolute;
  margin: 17% 0 0 -7.25%;
  width: 45%;
  z-index: 2;

  @media only screen and (max-width: 1025px) {
    margin: 35% 0 0 -7.25%;
    width: 75%;
  }
`

export const PhoneContainerFour = styled.div`
  position: relative;
  z-index: 3;
`

export const Phone = styled.img`
  position: absolute;
  margin: 11% 0 0 55%;
  width: clamp(50%, 75.5%, 75.5%);
  z-index: 3;
`
export const Shadow = styled.img`
  position: absolute;
  margin: 23% 0 0 60%;
  width: 100%;
  z-index: 2;
`
export const InfoContainer = styled.div`
  & h1 {
    color: #2b3144;
    font-size: clamp(2rem, 12vw + 0.5rem, 5.75rem);
    line-height: 100%;
    max-width: 80%;
    padding-top: 40%;
    text-transform: uppercase;
  }

  & p {
    font-size: 16px;
    line-height: 26px;
    max-width: 65%;
    padding-top: 4%;
  }

  @media only screen and (max-width: 1025px) {
    grid-column-start: 1;
    grid-row-start: 1;

    & h1 {
      max-width: 95%;
    }

    & p {
      max-width: 90%;
      padding-bottom: 15%;
    }
  }
`

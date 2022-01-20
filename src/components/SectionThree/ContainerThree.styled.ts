import styled from "styled-components"

export const ContainerThree = styled.div`
  padding-top: 20%;
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;

  @media only screen and (max-width: 1520px) {
    grid-template-columns: 1fr;
  }
`

export const LeftContainer = styled.div`
  & h1 {
    color: #2b3144;
    font-size: clamp(2rem, 12vw + 0.5rem, 5.75rem);
    line-height: 100%;
    max-width: 90%;
    padding-top: 35%;
    text-transform: uppercase;
  }

  & p {
    font-size: 16px;
    line-height: 26px;
    max-width: 70%;
    padding-top: 4%;
  }

  @media only screen and (max-width: 1520px) {
    margin: 0 auto;
    padding-bottom: 10%;

    & h1 {
      max-width: 100%;
    }

    & p {
      max-width: 80%;
    }
  }
`
export const MapContainer = styled.div`
  position: relative;
`

export const Map = styled.img`
  position: absolute;
  width: 100%;
  margin-top: 12%;
`
export const Home = styled.img`
  opacity: 1;
  position: absolute;
  z-index: 5;
  width: 3.5%;
  margin: 23.5% 0 0 22.5%;
`

export const Location = styled.img`
  opacity: 1;
  position: absolute;
  z-index: 1;
  width: 13%;
  margin: 16.25% 0 0 83%;
`

export const Path = styled.img`
  opacity: 1;
  position: absolute;
  width: 64%;
  margin: 20.25% 0 0 24%;
`

export const Delivery = styled.img`
  opacity: 1;
  position: absolute;
  z-index: 2;
  width: 38.75%;
  margin-left: 40%;
`

export const Shadow = styled.img`
  opacity: 1;
  position: absolute;
  z-index: 1;
  width: 70.75%;
  margin: -12% 0 0 18%;
`

export const CarContainerThree = styled.div`
  position: relative;
`

export const Porsche = styled.img`
  position: absolute;
  margin: 13% 0 0 55%;
  width: 100%;
  z-index: 2;

  @media only screen and (max-width: 1520px) {
    display: none;
  }
`

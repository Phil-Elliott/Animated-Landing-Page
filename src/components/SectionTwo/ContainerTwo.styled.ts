import styled from "styled-components"

export const ContainerTwo = styled.div`
  padding-top: 22%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`

export const CarInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 78%;
  padding-bottom: 22%;

  & h3 {
    font-size: clamp(2rem, 12vw + 0.5rem, 4rem);
    font-weight: 400;
    margin: 15% 0 0 24%;
  }

  & h6 {
    color: ${({ theme }) => theme.colors.color1};
    font-size: 17px;
    margin: 0 0 0 24%;
  }

  @media only screen and (max-width: 1120px) {
    margin: 0 auto;
    width: 90%;
  }
`

export const LeftArrow = styled.img`
  cursor: pointer;
  margin: 9% 5% 0 75%;

  @media only screen and (max-width: 450px) {
    margin: 9% 5% 0 65%;
  }
`

export const RightArrow = styled.img`
  cursor: pointer;
  margin-top: 9%;
`

export const Mpg = styled.img`
  margin-right: 8%;
`

export const Hp = styled.img`
  margin-right: 11%;
`

export const Time = styled.img`
  margin-right: 9%;
`

export const Data = styled.p`
  color: #1b1e28;
  font-family: "Bebas Neue", cursive;
  font-size: 31px;
`

export const FlexMpg = styled.div`
  display: flex;
  margin: 13% 0 0 24%;
`

export const FlexOther = styled.div`
  display: flex;
  margin: 5% 0 0 24%;
`

export const InfoRight = styled.div`
  background-color: white;
  padding-top: 15%;
  z-index: 2;

  & h1 {
    color: #2b3144;
    font-size: clamp(2rem, 12vw + 0.5rem, 5.75rem);
    line-height: 100%;
    max-width: 80%;
  }

  & p {
    font-size: 16px;
    line-height: 170%;
    max-width: 75%;
    padding-top: 4%;
  }

  @media only screen and (max-width: 1120px) {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0 auto;
    padding-bottom: 10%;

    & h1 {
      margin: 0 auto;
      max-width: 90%;
    }

    & p {
      margin: 0 auto;
      max-width: 85%;
    }
  }
`

export const CarContainerTwo = styled.div`
  position: relative;
`

export const Car1 = styled.img`
  position: absolute;
  z-index: 3;
  margin: -25% 0 0 5%;
  width: clamp(50%, 105%, 120%);

  @media only screen and (max-width: 1120px) {
    margin: -25% 0 0 0%;
  }
`

export const Car2 = styled.img`
  position: absolute;
  z-index: 3;
  margin: -20% 0 0 5%;
  width: clamp(50%, 105%, 120%);

  @media only screen and (max-width: 1120px) {
    margin: -20% 0 0 0%;
  }
`

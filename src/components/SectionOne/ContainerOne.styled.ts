import styled from "styled-components"

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding-top: 1.5rem;
  padding-bottom: 6%;
  width: 100%;

  & h1 {
    color: white;
    font-size: clamp(3.4rem, 12vw + 0.5rem, 9.06rem);
    line-height: 95%;
    text-transform: uppercase;
  }

  & p {
    color: #414a69;
    padding-top: 1.3rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 1525px) {
    grid-template-columns: 1fr;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  margin-top: min(20%, 8rem);
`

export const Logo = styled.img``

export const ArrowRight = styled.img`
  margin-left: 30px;
  padding-top: 1.3rem;
  cursor: pointer;
`

export const PhoneContainer = styled.div`
  margin-top: 3rem;
  @media only screen and (max-width: 1525px) {
    display: none;
  }
`

export const Phone = styled.img`
  position: absolute;
  margin-left: 2rem;
  z-index: 2;
`

export const Shadow = styled.img`
  position: absolute;
  margin: -2rem 0 0 -6rem;
  z-index: 1;
`

export const CarContainer = styled.div`
  position: relative;
  margin-bottom: 8%;

  @media only screen and (max-width: 1525px) {
    margin-bottom: 17%;
  }
`

export const LeftCar = styled.img`
  position: absolute;
  margin-top: 4%;
  width: clamp(25%, 30%, 45%);

  @media only screen and (max-width: 1525px) {
    margin-top: 8%;
    width: clamp(25%, 42%, 45%);
  }
`

export const RightCar = styled.img`
  position: absolute;
  margin: 8% 0 0 26%;
  width: clamp(35%, 40%, 45%);

  @media only screen and (max-width: 1525px) {
    margin: 14% 0 0 50%;
    width: clamp(25%, 55%, 55%);
  }
`

export const CenterCar = styled.img`
  position: absolute;
  margin: 8% 0 0 6%;
  width: clamp(40%, 45%, 50%);
  z-index: 10;

  @media only screen and (max-width: 1525px) {
    margin: 14% 0 0 16%;
    width: clamp(25%, 65%, 65%);
  }
`

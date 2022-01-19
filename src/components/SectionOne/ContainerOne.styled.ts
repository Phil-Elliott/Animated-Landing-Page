import styled from "styled-components"

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding-top: 2.5rem;
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

export const HeaderContainer = styled.div`
  width: 100%;
  margin-top: max(10vh, 8rem);
`

export const Logo = styled.img``

export const ArrowRight = styled.img`
  margin-left: 30px;
  padding-top: 1.3rem;
  cursor: pointer;
`

export const PhoneContainer = styled.div`
  position: relative;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const Phone = styled.img`
  margin-left: 2rem;
  z-index: 2;
`

export const Shadow = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`

export const CarContainer = styled.div``

export const LeftCar = styled.img``

export const RightCar = styled.img``

export const CenterCar = styled.img``

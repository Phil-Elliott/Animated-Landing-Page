import styled from "styled-components"

export const ContainerFive = styled.div`
  padding-top: 15%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  background-color: #f5f5f7;
  padding: 18.5% 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    color: #2b3144;
    font-size: 210%;
    max-width: 70%;
    padding-top: 7%;
  }

  & p {
    font-size: 90%;
    line-height: 150%;
    padding-top: 4%;
  }
`

export const Image = styled.img``

export const Shadow = styled.img`
  padding-top: 2.5%;
`

export const Par1 = styled.p`
  max-width: 59%;
`

export const Par2 = styled.p`
  max-width: 68%;
`

export const Par3 = styled.p`
  max-width: 61.5%;
`

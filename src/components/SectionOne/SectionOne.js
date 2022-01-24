import React, { useEffect, useRef } from "react"
import { Flex } from "../styles/Flex.styled"
import { Container } from "../styles/Container.styled"
import {
  MainContainer,
  Grid,
  HeaderContainer,
  Logo,
  ArrowRight,
  PhoneContainer,
  Phone,
  Shadow,
  CarContainer,
  LeftCar,
  RightCar,
  CenterCar,
} from "./ContainerOne.styled"
// import { gsap } from "gsap"

const SectionOne = () => {
  const boxRef = useRef()
  const infoRef = useRef()
  const phoneRef = useRef()
  const tl = useRef()

  // useEffect(() => {
  //   tl.current = gsap
  //     .timeline()
  //     .from(boxRef.current, { duration: 0.5, x: "-100%" })
  //     .from(infoRef.current, { duration: 0.5, delay: 0.25, y: "-200%" })
  //     .from(phoneRef.current, { duration: 0.5, delay: 0.25, x: "500%" })
  // }, [])

  return (
    <MainContainer ref={boxRef}>
      <Container ref={infoRef}>
        <Logo src="./images/Section-One/logo.svg" alt="Logo" />
        <Grid>
          <HeaderContainer>
            <h1>Drive a new car every month.</h1>
            <Flex>
              <p>Available On the App Store</p>
              <ArrowRight src="./images/arrow-right.svg" alt="Right-Arrow" />
            </Flex>
          </HeaderContainer>
          <PhoneContainer ref={phoneRef}>
            <Phone src="./images/Section-One/phone.svg" alt="Phone" />
            <Shadow src="./images/Section-One/Shadow1.svg" alt="Phone Shadow" />
          </PhoneContainer>
        </Grid>
      </Container>
      <CarContainer>
        <LeftCar src="./images/Section-One/left-car.svg" alt="left-car" />
        <RightCar src="./images/Section-One/right-car.svg" alt="right-car" />
        <CenterCar src="./images/Section-One/center-car.svg" alt="center-car" />
      </CarContainer>
    </MainContainer>
  )
}

export default SectionOne

import React from "react"
import {
  ContainerSix,
  PictureContainer,
  Picture,
  InfoContainer,
  Border,
  Arrow,
  Car,
} from "./ContainerSix.styled"
import { Flex } from "./../styles/Flex.styled"

const SectionSix = () => {
  return (
    <ContainerSix>
      <PictureContainer>
        <Picture src="./images/Section-Six/Man.svg" alt="Man" />
      </PictureContainer>
      <InfoContainer>
        <h1>Customers with that new car smell</h1>
        <p>
          “With Eleanor I was able to drive 2 of my dream cars this year! The
          process is always easy and affordable!”
        </p>
        <h6>Alex Bateman, Interface Designer</h6>
        <Border src="./images/Section-Six/Border.svg" alt="Border" />
        <Flex>
          <h5>Available On the App</h5>
          <Arrow src="./images/arrow-right.svg" alt="Arrow" />
        </Flex>
      </InfoContainer>
      <Car src="./images/Section-Six/Car-White.svg" alt="Car" />
    </ContainerSix>
  )
}

export default SectionSix

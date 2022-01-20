import React from "react"
import { PhoneContainer } from "../SectionOne/ContainerOne.styled"
import {
  ContainerFour,
  Car,
  CarContainer,
  InfoContainer,
  PhoneContainerFour,
  Phone,
  Shadow,
} from "./ContainerFour.styled"

const SectionFour = () => {
  return (
    <ContainerFour>
      <CarContainer>
        <Car src="./images/Section-Four/HeadOn-Porsche.svg" alt="Porsche" />
        <PhoneContainerFour>
          <Phone
            src="./images/Section-Four/YourVehicle-phone.svg"
            alt="Phone"
          />
          <Shadow src="./images/Section-Four/Shadow3.svg" alt="Phone Shadow" />
        </PhoneContainerFour>
        <div></div>
      </CarContainer>
      <InfoContainer>
        <h1>TRADE IN YOUR CAR EVERY MONTH.</h1>
        <p>
          Use Eleanor Trade-In Credits to trade in your vehicle for something
          else in our luxurious inventory. Nothing says “June” like a new car!
        </p>
      </InfoContainer>
    </ContainerFour>
  )
}

export default SectionFour

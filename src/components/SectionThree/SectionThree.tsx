import React from "react"
import {
  ContainerThree,
  LeftContainer,
  MapContainer,
  Map,
  Home,
  Location,
  Path,
  Delivery,
  Shadow,
  CarContainerThree,
  Porsche,
} from "./ContainerThree.styled"

const SectionThree = () => {
  return (
    <ContainerThree>
      <LeftContainer>
        <h1>Delivered to your Door.</h1>
        <p>
          Eleanor works with your schedule to have a white-glove delivery
          service deliver your new vehicle right to your door.
        </p>
      </LeftContainer>
      <MapContainer>
        <Map src="./images/Section-Three/map.svg" alt="Map" />
        <Home src="./images/Section-Three/home.svg" alt="Home" />
        <Location src="./images/Section-Three/location.svg" alt="Location" />
        <Path src="./images/Section-Three/path.svg" alt="Path" />
        <Delivery src="./images/Section-Three/delivery.svg" alt="Delivery" />
        <Shadow src="./images/Section-Three/Shadow2.svg" alt="Shadow" />
      </MapContainer>
      <CarContainerThree>
        <Porsche src="./images/Section-Three/porsche-small.svg" alt="Porsche" />
      </CarContainerThree>
    </ContainerThree>
  )
}

export default SectionThree

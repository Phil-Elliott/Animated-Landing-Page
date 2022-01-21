import React, { useState, useEffect, useRef } from "react"
import {
  ContainerTwo,
  CarInfo,
  LeftArrow,
  RightArrow,
  Data,
  Mpg,
  Hp,
  Time,
  FlexMpg,
  FlexOther,
  InfoRight,
  CarContainerTwo,
  Car1,
  Car2,
} from "./ContainerTwo.styled"
import { Flex } from "../styles/Flex.styled"
import { gsap } from "gsap"

const SectionTwo = () => {
  const [car, setCar] = useState(0)
  const carRef = useRef()

  useEffect(() => {
    gsap.from(carRef.current, {
      duration: 0.5,
      opacity: 0,
      x: "40%",
    })
  }, [car])

  const dataArr = [
    {
      name: "Land Rover",
      details: "2019 - RANGE ROVER VELAR",
      mpg: "25/29",
      hp: "247",
      time: "6.4",
    },
    {
      name: "PORSCHE",
      details: "2019 - 911 CARRERA S",
      mpg: "19/24",
      hp: "443",
      time: "3.2",
    },
  ]

  const changeData = () => {
    car === 0 ? setCar(1) : setCar(0)
  }

  return (
    <ContainerTwo id="container">
      <CarInfo>
        <div>
          <Flex>
            <LeftArrow
              src="./images/Section-Two/left-arrow.svg"
              alt="Left-Arrow"
              onClick={changeData}
            />
            <RightArrow
              src="./images/Section-Two/right-arrow2.svg"
              alt="Right-Arrow"
              onClick={changeData}
            />
          </Flex>
          <div>
            <h3>{dataArr[car].name}</h3>
            <h6>{dataArr[car].details}</h6>
            <FlexMpg>
              <Mpg src="./images/Section-Two/mpg.svg" alt="MPG" />
              <Data>{dataArr[car].mpg}</Data>
            </FlexMpg>
            <FlexOther>
              <Hp src="./images/Section-Two/hp.svg" alt="HP" />
              <Data>{dataArr[car].hp}</Data>
            </FlexOther>
            <FlexOther>
              <Time src="./images/Section-Two/time.svg" alt="Time" />
              <Data>{dataArr[car].time}</Data>
            </FlexOther>
          </div>
        </div>
      </CarInfo>
      <InfoRight>
        <div>
          <h1>Select a Vehicle From Your Phone.</h1>
          <p>
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </p>
        </div>
      </InfoRight>
      <CarContainerTwo>
        {car === 0 ? (
          <Car1
            ref={carRef}
            src="./images/Section-Two/range-rover.svg"
            alt="range rover"
          />
        ) : (
          <Car2
            ref={carRef}
            src="./images/Section-Two/porsche-model.svg"
            alt="porsche"
          />
        )}
      </CarContainerTwo>
    </ContainerTwo>
  )
}

export default SectionTwo

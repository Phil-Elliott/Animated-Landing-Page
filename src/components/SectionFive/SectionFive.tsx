import React from "react"
import {
  ContainerFive,
  Grid,
  Content,
  Image,
  Shadow,
  Par1,
  Par2,
  Par3,
} from "./ContainerFive.styled"

const SectionFive = () => {
  return (
    <ContainerFive>
      <Grid>
        <Content>
          <Image src="./images/Section-Five/ImageGroup1.svg" alt="Coin" />
          <h3>SIMPLE MONTHLY PRICING</h3>
          <Par1>
            Pick your plan, pay the monthly price. Thats it. No hidden fees!
          </Par1>
        </Content>
        <Content>
          <Image src="./images/Section-Five/ImageGroup2.svg" alt="Form" />
          <h3>VEHICLE INSURANCE INCLUDED</h3>
          <Par2>
            That’s right, you’re covered. All Eleanor plans include insurance
            coverage.
          </Par2>
        </Content>
        <Content>
          <Image src="./images/Section-Five/ImageGroup3.svg" alt="Wrench" />
          <Shadow
            src="./images/Section-Five/ImageGroup3-shadow.svg"
            alt="Shadow"
          />
          <h3>MAINTENANCE IS COVERED</h3>
          <Par3>
            Leave it us. Don’t worry about maintaining your vehicle. Eleanor
            covers that as well.
          </Par3>
        </Content>
      </Grid>
    </ContainerFive>
  )
}

export default SectionFive

import { FooterContainer, Border, Logo } from "./FooterContainer.styled"

const Footer = () => {
  return (
    <FooterContainer>
      <Border src="./images/Footer/border-top.svg" alt="Border" />
      <div>
        <Logo src="./images/Footer/footer-logo.svg" alt="Logo" />
        <ul>
          <li>About Us</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
        </ul>
      </div>
    </FooterContainer>
  )
}

export default Footer

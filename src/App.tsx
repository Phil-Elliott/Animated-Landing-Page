import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import SectionOne from "./components/SectionOne/SectionOne"
import SectionTwo from "./components/SectionTwo/SectionTwo"
import SectionThree from "./components/SectionThree/SectionThree"
import SectionFour from "./components/SectionFour/SectionFour"
import SectionFive from "./components/SectionFive/SectionFive"
import SectionSix from "./components/SectionSix/SectionSix"
import Footer from "./components/Footer/Footer"
import { Container } from "./components/styles/Container.styled"

const theme = {
  colors: {
    body: "#ffffff",
    main: "#FBC843",
    color1: "#4B5168",
  },
  fonts: {
    main: "'Bebas Neue', cursive",
    secondary: "'Maven Pro', sans-serif",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SectionOne />
      <Container>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App

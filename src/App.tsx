import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import SectionOne from "./components/SectionOne/SectionOne"

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
    </ThemeProvider>
  )
}

export default App

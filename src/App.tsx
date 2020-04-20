import React from 'react';
import { Controller, Scene } from 'react-scrollmagic'
import { ThemeProvider } from 'emotion-theming'
import { Heading, Text, Box } from 'rebass'
import { Module } from './components'
import "./App.css"
import theme from './theme'
import { ModuleProps as TModule } from './components/Module'
import {
  Introduction,
  Methodology,
  Research,
  Results
} from './content'


const modules = [
  Introduction,
  Research,
  Methodology,
  Results
] as const

const App = () => {
  return <ThemeProvider theme={theme}>
    <Box px={5}>
      <Heading
        color={theme.colors.green}
        fontFamily="serif"
        fontSize="4rem"
        fontWeight="normal"
        pt={5}
        pb={2}
      >
        50 shades of green 🌿
            </Heading>
      <Text
        color={theme.colors.grey}
        fontSize={1}
      >Samuel Elkind, Ollie Hsieh, Michael Liang, Nick Martucci, Matt Redington</Text>

      {modules.map((module, index) =>
        <Module
          index={index}
          heading={module.heading}
          sections={module.sections}
        />
      )}
    </Box>
  </ThemeProvider >
}

export default App;

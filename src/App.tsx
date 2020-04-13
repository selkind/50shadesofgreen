import React from 'react';
import { Controller, Scene } from 'react-scrollmagic'
import { ThemeProvider } from 'emotion-theming'
import { Heading, Text, Box } from 'rebass'
import { Module } from './components'
import "./App.css"
import theme from './theme'
import { ModuleProps as TModule } from './components/Module'


const modules: TModule[] = [
  {
    heading: "Introduction",
    sections: [
      {
        title: "",
        subtitle: "",
        text: ""
      }
    ]
  },
  {
    heading: "Data",
    sections: [
      {
        title: "Data attributes",
        subtitle: "",
        text: "Our dataset comprises 5539 images of crop and weed seedlings."
      }
    ]
  },
  {
    heading: "Approach",
    sections: [
      {
        title: "",
        subtitle: "",
        text: "",
      },
      {
        title: "",
        subtitle: "Segmentation",
        text: "",
        image: "hello",
        imagePos: "left"
      },
      {
        title: "",
        subtitle: "",
        text: "",
      },
      {
        title: "",
        subtitle: "",
        text: "",
        image: "hello",
        imagePos: "right"
      }
    ]
  },
  {
    heading: "Supervised",
    sections: [
      {
        title: "",
        subtitle: "",
        text: ""
      }
    ]
  },
  {
    heading: "Unsupervised",
    sections: [
      {
        title: "",
        subtitle: "",
        text: ""
      }
    ]
  }
]

const App = () => {
  return <ThemeProvider theme={theme}>
    <Box px={5}>
      <Controller>

        <Scene duration={600} pin={true}>
          <div>
            <Heading
              color={theme.colors.green}
              fontFamily="serif"
              fontSize="4rem"
              fontWeight="normal"
              pb={2}
            >
              50 shades of green 🌿
            </Heading>
            <Text
              color={theme.colors.grey}
              fontSize={1}
            >Samuel Elkind, Ollie Hsieh, Michael Liang, Nick Martucci, Matt Redington</Text>
          </div>
        </Scene>

        {modules.map((module, index) =>
          <Scene duration={600} pin={true}>
            <div>
              <Module
                index={index}
                heading={module.heading}
                sections={module.sections}
              />
            </div>
          </Scene>
        )}

      </Controller>
    </Box>
  </ThemeProvider >
}

export default App;

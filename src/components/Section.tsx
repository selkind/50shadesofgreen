import React from 'react'
import { Box, Flex, Heading, Image, Text } from 'rebass'
import theme from '../theme'

const PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export type SectionProps = {
  image?: string
  imagePos?: "left" | "right" | "center"
  imageCaption?: string
  imageDescription?: string
  list?: string[]
  subtitle?: string
  text?: string
  title?: string
}

export const Section: React.FC<SectionProps> = ({ image, imageCaption, imagePos, list, subtitle, title, text }) =>
  <>
    {!!title &&
      <Heading
        color={theme.colors.yellow}
        fontSize={3}
        fontFamily="serif"
        fontWeight="normal"
        pt={4}
      >{title}</Heading>}

    {!!subtitle &&
      <Heading
        color={theme.colors.green}
        fontSize={2}
        fontFamily="serif"
        fontWeight="normal"
        pt={4}
      >{subtitle}</Heading>}

    <Flex
      flexDirection={[
        "column",
        "column",
        "row"
      ]}
      maxWidth="40rem"
      pt={3}
    >
      {
        !!image &&
        imagePos === "left" &&
        <Box
          mb={3}
        >
          <Image
            src={image}
            width="100%"
            height="100%"
            mr={[0, 0, 2]}
            mb={[3, 0, 0]}
          />
          <Text
            color={theme.colors.grey}
            fontSize="0.8em"
            mt={1}
          >{imageCaption}</Text>
        </Box>
      }

      {
        !!text &&
        <Text
          color={theme.colors.grey}
          fontFamily="serif"
          fontSize={1}
        >
          {text}
        </Text>
      }

      {
        !!list &&
        <Box>
          {list.map((item, index) =>
            <Text
              color={theme.colors.grey}
              fontFamily="serif"
              fontSize={1}
            >
              <span style={{
                opacity: 0.5
              }}>{index + 1}. </span>
              {item}
            </Text>
          )}
        </Box>
      }


      {
        !!image &&
        imagePos === "right" &&
        <Image
          src={image}
          width="100%"
          height="100%"
          ml={[0, 0, 2]}
          mt={[3, 0, 0]}
        />
      }
    </Flex>
  </>

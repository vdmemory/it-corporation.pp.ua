import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'

import * as React from 'react'

import SocialLinks from '#components/SocialLinks'
import { LanguageSwitcher } from '#components/language-switcher'

import { Logo } from './logo'
import Navigation from './navigation'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])

  const bg = useColorModeValue('whiteAlpha.700', 'rgba(29, 32, 37, 0.7)')

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ''}
      boxShadow={y > height ? 'md' : ''}
      borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      <Container maxW="container.2xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          />
          <Navigation />
          <HStack spacing={2}>
            <LanguageSwitcher />
            <SocialLinks isHeader />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

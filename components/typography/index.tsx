import {
  HTMLChakraProps,
  Text,
  TextProps,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

export const Em: React.FC<HTMLChakraProps<'em'>> = ({ children, ...props }) => {
  return (
    <Text
      color={useColorModeValue('black', 'white')}
      as="em"
      fontStyle="normal"
      {...props}
    >
      {children}
    </Text>
  )
}

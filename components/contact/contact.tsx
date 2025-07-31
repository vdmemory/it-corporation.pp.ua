import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

import { Section } from '#components/section'
import { configCompany } from '#data/configCompany'

export interface ContactProps {
  title?: React.ReactNode
  description?: React.ReactNode
  formTitle?: React.ReactNode
  formDescription?: React.ReactNode
  infoTitle?: React.ReactNode
  infoDescription?: React.ReactNode
  infoEmail?: string
  infoPhone?: string
  infoAddress?: string
  clientAddress?: string
  labels?: {
    firstName: string
    lastName: string
    email: string
    message: string
    submit: string
  }
}

export const Contact: React.FC<ContactProps> = (props) => {
  const {
    title,
    description,
    formTitle,
    formDescription,
    infoTitle,
    infoDescription,
    infoEmail,
    infoPhone,
    infoAddress,
    clientAddress,
    labels,
    ...rest
  } = props

  const actionEmail = `https://formsubmit.co/${configCompany.email}`

  return (
    <Section id="contact" bg="gray.50" _dark={{ bg: 'gray.800' }} {...rest}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {(title || description) && (
            <VStack spacing={4} textAlign="center">
              {title && (
                <Heading as="h2" size="xl">
                  {title}
                </Heading>
              )}
              {description && (
                <Text
                  fontSize="lg"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                >
                  {description}
                </Text>
              )}
            </VStack>
          )}

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12}>
            {/* Contact Form */}
            <GridItem>
              <VStack spacing={6} align="stretch">
                {formTitle && (
                  <Heading as="h3" size="lg">
                    {formTitle}
                  </Heading>
                )}
                {formDescription && (
                  <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                    {formDescription}
                  </Text>
                )}

                <Box
                  as="form"
                  action={actionEmail}
                  method="POST"
                  bg="white"
                  _dark={{ bg: 'gray.700' }}
                  p={8}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Stack spacing={4}>
                    <HStack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel>{labels?.firstName}</FormLabel>
                        <Input
                          name="firstName"
                          placeholder={labels?.firstName}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>{labels?.lastName}</FormLabel>
                        <Input name="lastName" placeholder={labels?.lastName} />
                      </FormControl>
                    </HStack>

                    <FormControl isRequired>
                      <FormLabel>{labels?.email}</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        placeholder={labels?.email}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>{labels?.message}</FormLabel>
                      <Textarea
                        name="message"
                        placeholder={labels?.message}
                        rows={5}
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="primary" size="lg">
                      {labels?.submit}
                    </Button>
                  </Stack>
                </Box>
              </VStack>
            </GridItem>

            {/* Contact Info */}
            <GridItem>
              <VStack spacing={6} align="stretch">
                {infoTitle && (
                  <Heading as="h3" size="lg">
                    {infoTitle}
                  </Heading>
                )}
                {infoDescription && (
                  <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                    {infoDescription}
                  </Text>
                )}

                <Text color="gray.600" _dark={{ color: 'gray.400' }}></Text>

                <VStack spacing={6} align="stretch">
                  <ContactInfoItem
                    icon={FiMail}
                    label={infoEmail || 'Email'}
                    value={configCompany.email}
                    href={`mailto:${configCompany.email}`}
                  />
                  <ContactInfoItem
                    icon={FiPhone}
                    label={infoPhone || 'Phone'}
                    value={configCompany.phone}
                    href={`tel:${configCompany.phone}`}
                  />
                  <ContactInfoItem
                    icon={FiMapPin}
                    label={infoAddress || 'Address'}
                    value={clientAddress || configCompany.address}
                  />
                </VStack>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Section>
  )
}

interface ContactInfoItemProps {
  icon: any
  label: string
  value: string
  href?: string
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  label,
  value,
  href,
}) => {
  const content = (
    <HStack
      spacing={4}
      p={4}
      bg="white"
      _dark={{ bg: 'gray.700' }}
      borderRadius="lg"
      boxShadow="sm"
    >
      <Box
        p={3}
        bg="primary.100"
        _dark={{ bg: 'primary.800', color: 'primary.300' }}
        borderRadius="full"
        color="primary.600"
        h={45}
      >
        <Icon as={icon} boxSize={5} />
      </Box>
      <VStack align="start" spacing={1}>
        <Text
          fontWeight="semibold"
          fontSize="sm"
          color="gray.600"
          _dark={{ color: 'gray.400' }}
        >
          {label}
        </Text>
        <Text fontWeight="medium">{value}</Text>
      </VStack>
    </HStack>
  )

  if (href) {
    return (
      <Box
        as="a"
        href={href}
        _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
        transition="all 0.2s"
      >
        {content}
      </Box>
    )
  }

  return content
}

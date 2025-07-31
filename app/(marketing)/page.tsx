'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiMonitor,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTool,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Contact } from '#components/contact'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { useLanguage } from '#components/language-provider'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { getContact } from '#data/contact'
import { getFaq } from '#data/faq'
import { getPricing } from '#data/pricing'
import { getTestimonials } from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      <ContactSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                {t('hero.title').split(' ').slice(0, 2).join(' ')}
                <Br /> {t('hero.title').split(' ').slice(2).join(' ')}
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                {t('hero.description')}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8"></HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="#services">
                  {t('hero.services')}
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#contact"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  {t('hero.contact')}
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="240px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '60%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  style={{
                    position: 'absolute',
                    top: '-120px',
                    left: '160px',
                    borderRadius: '8px',
                    zIndex: '1',
                  }}
                  src="/static/screenshots/list3.png"
                  width={375}
                  height={200}
                  alt="Пример веб-приложения IT Corporation"
                  quality="75"
                  priority
                />
                <Image
                  style={{
                    position: 'absolute',
                    borderRadius: '8px',
                    zIndex: '2',
                  }}
                  src="/static/screenshots/list.webp"
                  width={680}
                  height={511}
                  alt="Пример веб-приложения IT Corporation"
                  quality="75"
                  priority
                />
                <Image
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '-140px',
                    borderRadius: '8px',
                    zIndex: '3',
                  }}
                  src="/static/screenshots/list2.webp"
                  width={375}
                  height={200}
                  alt="Пример веб-приложения IT Corporation"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: t('benefits.webdev'),
            icon: FiGlobe,
            description: t('benefits.webdev.desc'),
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: t('benefits.security'),
            icon: FiShield,
            description: t('benefits.security.desc'),
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: t('benefits.mobile'),
            icon: FiSmartphone,
            description: t('benefits.mobile.desc'),
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: t('benefits.consulting'),
            icon: FiTool,
            description: t('benefits.consulting.desc'),
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { t } = useLanguage()

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title={t('highlights.tech.title')}>
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            {t('highlights.tech.desc')}
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title={t('highlights.reliable.title')}>
        <Text color="muted" fontSize="lg">
          {t('highlights.reliable.desc')}
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Anna Smirnova"
        description="IT Director"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        {t('highlights.testimonial')}
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title={t('highlights.fullcycle.title')}
      >
        <Text color="muted" fontSize="lg">
          {t('highlights.fullcycle.desc')}
        </Text>
        <Wrap mt="8">
          {[
            'web development',
            'mobile apps',
            'cybersecurity',
            'cloud solutions',
            'DevOps',
            'testing',
            'UI/UX дизайн',
            'technical support',
            'consulting',
            'integrations',
            'automation',
            'analytics',
            'monitoring',
            'backup',
            'scaling',
            'optimization',
            'training',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  const { t } = useLanguage()

  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          {t('features.title').split(' ')[0]}
          <Br /> {t('features.title').split(' ').slice(1).join(' ')}
        </Heading>
      }
      description={<>{t('features.description')}</>}
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: t('features.webdev.title'),
          icon: FiGlobe,
          description: t('features.webdev.desc'),
          variant: 'inline',
        },
        {
          title: t('features.security.title'),
          icon: FiLock,
          description: t('features.security.desc'),
          variant: 'inline',
        },
        {
          title: t('features.cloud.title'),
          icon: FiServer,
          description: t('features.cloud.desc'),
          variant: 'inline',
        },
        {
          title: t('features.mobile.title'),
          icon: FiSmartphone,
          description: t('features.mobile.desc'),
          variant: 'inline',
        },
        {
          title: t('features.devops.title'),
          icon: FiZap,
          description: t('features.devops.desc'),
          variant: 'inline',
        },
        {
          title: t('features.database.title'),
          icon: FiDatabase,
          description: t('features.database.desc'),
          variant: 'inline',
        },
        {
          title: t('features.integration.title'),
          icon: FiCpu,
          description: t('features.integration.desc'),
          variant: 'inline',
        },
        {
          title: t('features.support.title'),
          icon: FiMonitor,
          description: t('features.support.desc'),
          variant: 'inline',
        },
        {
          title: t('features.consulting.title'),
          icon: FiUsers,
          description: t('features.consulting.desc'),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const { t } = useLanguage()
  const testimonials = getTestimonials(t)

  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  const { t } = useLanguage()
  const pricing = getPricing(t)

  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {t('pricing.vat')}
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  const { t } = useLanguage()
  const faq = getFaq(t)

  return <Faq {...faq} />
}

const ContactSection = () => {
  const { t, language } = useLanguage()
  const contact = getContact(t, language)

  return <Contact {...contact} />
}

export default Home

import { Box, Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'

import * as React from 'react'

import { Em } from '#components/typography'
import siteConfig from '#data/config'
import { configCompany } from '#data/configCompany'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Flex h="14" flexShrink="0" alignItems="flex-center">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        gap="1rem"
      >
        <Image
          style={{
            borderRadius: '30px',
          }}
          src="/static/icons/logo.png"
          width={50}
          height={44}
          alt="Screenshot of a ListPage in Saas UI Pro"
          quality="75"
          priority
        />
        <Text
          display="flex"
          color="muted"
          fontSize="xl"
          alignItems="center"
          fontWeight="bold"
        >
          {configCompany.name}
        </Text>
      </Link>
    </Flex>
  )
}

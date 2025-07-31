import { Flex, Image, chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import React from 'react'

import { configCompany } from '#data/configCompany'

const MotionLink = chakra(motion.a)

const SocialLinks = ({
  isHeader = false,
  isLight = false,
}: {
  isHeader?: boolean
  isLight?: boolean
}) => {
  const socialLinks = [
    {
      icon: '/static/icons/facebook.png',
      href: configCompany.facebook,
      color: '#A01F5D',
    },
    {
      icon: '/static/icons/insta.png',
      href: configCompany.instagram,
      color: '#FBB216',
    },
    {
      icon: '/static/icons/prom.png',
      href: configCompany.prom,
      color: '#FF4500',
    },
  ]

  const links = isHeader ? socialLinks.slice(0, 3) : socialLinks

  return (
    <Flex gap={4} px={3}>
      {links.map((social, index) => (
        <MotionLink
          key={index}
          href={social.href as string}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '9999px',
            backgroundColor: isLight ? 'white' : '#2D3748',
            boxShadow: isLight
              ? '0 1px 3px rgba(0,0,0,0.1)'
              : '0 2px 6px rgba(0,0,0,0.2)',
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition="all 0.2s"
        >
          <Image
            src={social.icon}
            alt="social"
            boxSize="20px"
            filter={isLight ? 'auto' : 'none'}
          />
        </MotionLink>
      ))}
    </Flex>
  )
}

export default SocialLinks

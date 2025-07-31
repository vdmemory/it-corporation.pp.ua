'use client'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

import { Language, useLanguage } from '#components/language-provider'

const languages = [
  { code: 'bg' as Language, name: 'Български', flag: '🇧🇬' },
  { code: 'ua' as Language, name: 'Українська', flag: '🇺🇦' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
]

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        minW="auto"
        px={2}
      >
        <HStack spacing={2}>
          <Text fontSize="22">{currentLanguage?.flag}</Text>
          <Text fontSize="sm" display={{ base: 'none', md: 'block' }}>
            {currentLanguage?.name}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            bg={language === lang.code ? 'gray.100' : 'transparent'}
            _dark={{
              bg: language === lang.code ? 'gray.700' : 'transparent',
            }}
          >
            <HStack spacing={3}>
              <Text>{lang.flag}</Text>
              <Text>{lang.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

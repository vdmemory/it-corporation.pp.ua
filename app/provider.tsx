'use client'

import { SaasProvider } from '@saas-ui/react'

import { LanguageProvider } from '#components/language-provider'
import { theme } from '#theme'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme}>
      <LanguageProvider>
        {props.children}
      </LanguageProvider>
    </SaasProvider>
  )
}

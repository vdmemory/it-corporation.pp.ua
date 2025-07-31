'use client'

import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'

export function Provider(props: { children: React.ReactNode }) {
  return <SaasProvider theme={theme}>{props.children}</SaasProvider>
}

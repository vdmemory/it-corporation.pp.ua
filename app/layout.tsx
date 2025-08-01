import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  // const colorMode = theme.config.initialColorMode

  const colorMode = 'dark' // Set to 'dark' or 'light' based on your preference or logic

  return (
    <html
      lang="en"
      data-theme={colorMode}
      style={{ colorScheme: colorMode, scrollBehavior: 'smooth' }}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}

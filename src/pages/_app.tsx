import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#61B0FF',
    100: '#51A8FF',
    200: '#409FFF',
    300: '#2D95FF',
    400: '#188AFF',
    500: '#017EFF',
    600: '#0173E8',
    700: '#0169D3',
    800: '#015FC0',
    900: '#0156AF',
  },

  black: {
    50: '#252628',
    100: '#1A1B1D',
    200: '#151618',
    300: '#121315',
    400: '#111214',
    500: '#0F1012',
    600: '#0E0F10',
    700: '#0D0E0F',
    800: '#0C0D0E',
    900: '#0B0C0D',
  },

  white: {
    50: '#FAFAFA',
    100: '#FAFAFA',
    200: '#F9FAFA',
    300: '#F8FAFA',
    400: '#F7F9FA',
    500: '#F6F8FA',
    600: '#F5F7F9',
    700: '#F4F6F8',
    800: '#F1F3F5',
    900: '#EBEDEF',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../styles/global.scss'

import { Provider as NextAuthProvider } from 'next-auth/client'

const initialOptions ={
  "client-id": "AX4I--5Wk8ADk5TUit-CGRDHui_M0j6Yzo9cWqS9fMiyfq22m3Jj71abxjAhcYfC2hVkcfJsjIzzoF8_",
  currency: "BRL",
  intent: "capture",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
      <Header />
      <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp

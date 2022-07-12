import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../styles/global.scss'

import { Provider as NextAuthProvider } from 'next-auth/client'

const initialOptions ={
  "client-id": "ARIepvryEG6eEJFztjL-9K6jjScMb5MHglrC6TW0kwD3IRx5FGRv8RUTHfqMJsgosZalSFUzrBRWcfr5",
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

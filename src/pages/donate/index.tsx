import React from 'react'
import styles from './styles.module.scss'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import { PayPalButtons } from '@paypal/react-paypal-js'

// CLIENT_ID = ARIepvryEG6eEJFztjL-9K6jjScMb5MHglrC6TW0kwD3IRx5FGRv8RUTHfqMJsgosZalSFUzrBRWcfr5
// <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
interface DonateProps{
  user:{
    nome: string,
    id: string,
    image: string,
  }
}

export default function Donate({ user }: DonateProps){
  return(
    <>
      <Head>
        <title>Ajuda a plataforma board a ficar onlien</title>
      </Head>
      <main className={styles.container}>
        <img src="images/rocket.svg" alt="Foto do perfil do usuario" />

        <div className={styles.vip}>
          <img src={user.image} alt="" />
          <span>Parabéns você é um apoiador!</span>
        </div>
        
        <h1>Seja um apoiador deste projeto 🏆</h1>
        <h3>Contribua com apenas <span>R$ 1,00</span></h3>
        <strong>Apareça na nossa home, tenha funcionalidades exclusivas.</strong>

        <PayPalButtons 
          createOrder={( data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount:{
                  value: '1'
                }
              }]
            })
          }}
          onApprove={ (data, actions) =>{
            return actions.order.capture().then(function(details){
              console.log('Compra aprovada: ' + details.payer.name.given_name)
            })
          }}
        />
      
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) =>{
  const session = await getSession({ req })

  if(!session?.id){
    return{
      redirect:{
        destination: '/',
        permanent: false,
      }
    }
  }

  const user = {
    nome: session?.user?.name,
    id: session?.id,
    image: session?.user?.image
  }

  return{
    props:{
      user
    }
  }
}
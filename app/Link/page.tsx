/* eslint-disable @next/next/no-script-component-in-head */
'use client'
 
import { useRouter } from 'next/navigation'
import CSS from 'csstype'
import Script from 'next/script';
import Head from 'next/head';
 
export default function Page() {

  const router = useRouter()
 
  const input: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    right: 0,
    bottom: '2rem',
    margin: `10px`,
    fontFamily: 'sans-serif',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',

    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: 'inline-block',
    padding: "3px",
    transform: "rotate(-45deg)",
  
  };

  const header1: CSS.Properties = {
    backgroundColor: '#102C4E60',
    width: "70%",
    textAlign: "center",
    fontSize: "35px",
    color: "white",
    marginTop: "5px",
    borderBlock: "5px solid green",
    borderColor: "lightblue"
  };
 

  return (
    
    <>
    
    <Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQSRLDFLQJ" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DQSRLDFLQJ');
      `}
      </Script>
    </Head>
    
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQSRLDFLQJ" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DQSRLDFLQJ');
      `}
      </Script>
    <div>
        <h1 style={header1}><b>LINKTREE</b></h1>
        <i style={input}></i>
        <button type="button" onClick={() => router.push('/Dashboard')}>
          Dashboard
        </button>
        <br />
        <i style={input}></i>
        <button type="button" onClick={() => router.push('/Link')}>
          Link
        </button>
        <br />
        <i style={input}></i>
        <button type="button" onClick={() => router.push('/ClickGame')}>
          ClickGame
        </button>
        <br />
        <i style={input}></i>
        <button type="button" onClick={() => router.push('/Formular')}>
          Formular
        </button>
        <br />
        <i style={input}></i>
        <button type="button" onClick={() => router.push('/')}>
          Startseite
        </button>
      </div>
      
      </>
  )
  }

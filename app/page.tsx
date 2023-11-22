'use client'

import CSS from 'csstype'
import type { Metadata } from 'next'

import { useRouter } from 'next/navigation'
import Script from 'next/script';

export default function Home() {

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
    transform: "rotate(-45deg)"
  };

  const router = useRouter()

  return  (<>
   <Script src="https://example.com/rootpage-script/afterinteractive/script.js" strategy="afterInteractive" />
  <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1><i style={input}></i><button  className="button-24" type="button" onClick={() => router.push('/Dashboard')}>
    Dashboard
  </button></>)
}

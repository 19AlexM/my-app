'use client'
 
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import CSS from 'csstype'
import 'reactjs-popup/dist/index.css';
 
export default function Counter() {

 // throw new Error('Clickgame test Error')

  const [count, setCount] = useState(0)
  const router = useRouter()



  const input: CSS.Properties = {
    fontSize: "30px",
    backgroundColor: 'rgba(185, 183, 183)',
    right: 0,
    bottom: '2rem',
    fontFamily: 'sans-serif'
  };

  const buttonstyle: CSS.Properties = {
    backgroundColor: 'rgba(74, 247, 115, 1)',
    right: 0,
    bottom: '2rem',
    padding: '3px 10px',
    margin: `8px 0`,
    fontFamily: 'sans-serif',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };

  const header1: CSS.Properties = {
    backgroundColor: '#102C4E60',
    width: "50%",
    textAlign: "center",
    fontSize: "35px",
    color: "white",
    marginTop: "5px",
    borderBlock: "5px solid green",
    borderColor: "lightblue"
  };
  
  return (

    <div>
 
    <h1 style={header1}><b>CLICKGAME</b></h1>

    <p style={input}>You clicked <b> {count}</b> times</p>
      <button style={buttonstyle} onClick={() => {setCount(count + 1)}}
          >Click me</button>

    <br />

    <button  type="button" onClick={() => router.push('/Dashboard')}>
    Dashboard
    </button>
    <br />
    <button type="button" onClick={() => router.push('/Link')}>
    Linktree
    </button>
    <br />
    <button type="button" onClick={() => router.push('/ClickGame')}>
    ClickGame
    </button>    <br />
    <button type="button" onClick={() => router.push('/')}>
    Startseite
    </button>
    </div>

  )
}
'use client'

import { notFound, useRouter } from 'next/navigation'
import CSS from 'csstype'
import coop from './pictures/coop.png'
import Image from 'next/image'

export default function Page() {

  //throw new Error('Dashboard test Error: Loading failed');

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
    transform: "rotate(-45deg)"
  };

  const header1: CSS.Properties = {
    backgroundColor: '#102C4E60',
    width: "40%",
    fontSize: "35px",
    color: "white",
    marginTop: "5px",
    borderBlock: "5px solid green",
    borderColor: "lightblue"
  };

  const bild: CSS.Properties = {
    float: "left"
  };

  return (
    
    <div>

<div className="header">
<Image
      src={coop}
      width={200}
      height={200}
      alt="Coop Logo"
      style={bild}
    />
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>

      <h1 style={header1}><b>Dashboard</b></h1>
      <br />
      
    <button  className="button-24" type="button" onClick={() => router.push('/Dashboard')}>
      Dashboard
    </button>/<button  className="button-24" type="button" onClick={() => router.push('/Dashboard/Overview')}>
      Overview
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/Link')}>
    Link
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/ClickGame')}>
    ClickGame
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/')}>
    Startseite
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/Gallery')}>
    Gallery
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/Formular')}>
    Formular
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/ThirdPartyjs')}>
    Script Components
    </button><br/>
    <button  className="button-24" type="button" onClick={() => router.push('/First')}>
    First Dashboard
    </button>
    <br />
  
    </div>
  )
}
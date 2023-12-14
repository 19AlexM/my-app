'use client'

import {useRouter } from 'next/navigation'
import CSS from 'csstype'
import coop from './pictures/coop.png'
import Image from 'next/image'
import React, { useState } from 'react'


export default function Page(this: any) {

  const router = useRouter()

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

  const [kategorie, setKategorie] = useState('');
  
  const handleChange = (e: { target: { value: any } }) => {
    const selectedValue = e.target.value;
    setKategorie(selectedValue);
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

      <div className='w-1/3'>
      <select className='w-full' onChange={handleChange}>
      <option value="--">Wähle eine Verzweigung...</option>
        <option value="db">Dashboard</option>
        <option value="tp">ThirdParty</option>
        <option value="aa">Alles andere..</option>
        <option value="alle">Alle Anzeigen</option>
      </select>
    </div>

    {kategorie === ('db' || 'alle') && (
            <>
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
          </>
          )}

{kategorie === ('aa' || 'alle') && (
            <>
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
    Kontaktformular
    </button>
    <br />
    <br />
    <button  className="button-24" type="button" onClick={() => router.push('/ThirdPartyjs')}>
    Script Components
    </button><br/>
          </>
          )}
       {kategorie === ('tp' || 'alle') && (
            <>
        <button  className="button-24" type="button" onClick={() => router.push('/First')}>
    First Dashboard
    </button>
    <br />
          </>
          )}
  
    </div>
  )
}
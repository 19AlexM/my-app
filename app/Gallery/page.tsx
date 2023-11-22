'use client'

import Image from 'next/image'
import profilePic from './picture/coop.jpg'
import { notFound, useRouter } from 'next/navigation'

import CSS from 'csstype'

export default function Page() {


  //Common Error
  //throw new Error('Dashboard test Error: Loading failed');

  // Not Found
  //SnotFound();

  const router = useRouter()

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

  const input: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    right: 0,
    bottom: '2rem',
    margin: "12px 23px -4px 20px",
    fontFamily: 'sans-serif',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',

    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: 'inline-block',
    padding: "9px",
    transform: "rotate(135deg)",
  };

  return (
    <div>
    <h1 style={header1}><b>GALLERY</b></h1>
  
  <br />

  <Image
      src={profilePic}
      alt="CoopStore"
      width={500} //automatically provided
      height={500} //automatically provided
      blurDataURL="data:..." //automatically provided
      placeholder="blur" // Optional blur-up while loading
    />

<i style={input}></i>
<button type="button" onClick={() => router.push('/Dashboard')}>
    Zurück zum Dashboard
  </button>
  </div>
  

  )
}
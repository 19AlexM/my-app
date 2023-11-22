'use client'
 
import '../globals.css'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import coop from '../Dashboard/pictures/coop.png'
import loading from './pictures/loading-gif.gif'
import Image from 'next/image'
import CSS from 'csstype'

import React from 'react';

 
export default function Page() {

  const bild: CSS.Properties = {
    float: "left"
  };
  const router = useRouter()
  const ErrMessage = "Error occured in ThirdPartyjs.tsx"

 function geladen(){
    if(onload){
      <Script src="https://example.com/ThirdPatyjs-page/lazyonload/script.js"  onReady={() => {console.log("Seite Vollständig geladen: -> Script wird geladen")} }/>
    }
  }

  return (
    <>
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"/>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"  onError={() => {alert("onError: Seite hat Fehler geworfen")} }/> 

      <div className="header">
<Image
      src={coop}
      width={200}
      height={200}
      alt="Coop Logo"
      style={bild}
    />
  <div className="header-right">
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>

    
  </div>
</div>

<a className="weatherwidget-io" href="https://forecast7.com/de/47d567d59/basel/" data-label_1="BASEL" data-label_2="WETTER" data-theme="original" >Lade Wetterdaten...<Image   src={loading}
      width={150}
      height={150}
      alt="Loading"></Image></a>
<Script async src='https://weatherwidget.io/js/widget.min.js'/>


<div style={{width: "100%"}}>
<button style={{width: "15%"}}  className="button-24" type="button" onClick={() => router.push('/')}>
    Startseite
    </button>
    <button  style={{width: "15%"}}  className="button-24" type="button" onClick={() => router.push('/Gallery')}>
    Gallery
    </button>
    <button  style={{width: "15%"}}  className="button-24" type="button" onClick={() => router.push('/Formular')}>
    Formular
    </button>
<button
    type="button"
    style={{width: "15%"}}
    onClick={() => {throw new Error(ErrMessage)}}
    className="button-24"
  >
    Trigger Error
  </button>
  </div>
  


  <div style={{float:"right", padding: "0% 1%"}}>
  <h1 className="font-black text-gray-200 text-5xl">Embedded Code</h1>
  <br />
<iframe height="480" width="650" src="https://ssltvc.investing.com/?pair_ID=8849&height=480&width=650&interval=300&plotStyle=area&domain_ID=1&lang_ID=1&timezone_ID=7"></iframe>

<iframe src="https://free.timeanddate.com/clock/i93z6ke5/n268/szw210/szh210/hoc000/hbw4/cf100/hgr0/fav0/fiv0/mqc000/mqs3/mql25/mqw6/mqd96/mhc000/mhs3/mhl20/mhw6/mhd96/mmc000/mms3/mml10/mmw2/mmd96/hhw16/hmw16/hmr4/hsc000/hss3/hsl90" frameBorder="0" width="210" height="210"></iframe>



<iframe width="816" height="554" scrolling="no" 
src="https://www.foto-webcam.eu/webcam/ewa/?frame=1"></iframe>



</div>

  <div  className="grid h-screen px-4 bg-green place-content-baseline">
          <h1 className="font-black text-gray-200 text-5xl">Twitter Feed Script Component</h1>
          <br />
          <a className="twitter-timeline" href="https://twitter.com/BusinessTimes" data-tweet-limit="1">Lade Twitter Feed...<Image   src={loading}
      width={150}
      height={150}
      alt="Loading"></Image></a>
        <Script async  src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </div>

        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mack.ch/" className="hover:underline">Mack™</a>. All Rights to Coop.
    </span>

<div className="md:flex">
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#ea4335", marginRight: "20px"}}
  viewBox="0 0 24 24">
  <path
    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
    fill-rule="evenodd"
    clip-rule="evenodd" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#ff0000", marginRight: "20px"}}
  viewBox="0 0 24 24">
  <path
    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#f8cc1b", marginRight: "20px"}}
  viewBox="0 0 24 24">
  <path
    d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#c13584", marginRight: "20px"}}
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#1877f2", marginRight: "20px"}}
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  fill="currentColor"
  style={{color: "#333"}}
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
</div>


    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>



    </>
  )
}



function geladen() {
  throw new Error('Function not implemented.')
}
/*
<div className="grid h-screen px-4 bg-green place-content-baseline">
<h1 className="font-black text-gray-200 text-7xl">Script Components</h1>
<button
    type="button"
    onClick={() => router.push('/Dashboard')}
    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
  >
    Back to Dashboard
  </button>
  <button
    type="button"
    onClick={() => {throw new Error("Error was generated in Dashboard/Overview")}}
    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
  >
    Trigger Error
  </button>

  </div>
*/







/*
  const twitter: CSS.Properties = {
    float: "initial",
    maxWidth:"600"
  };


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


        <div  className="" style={twitter}>
          <br />
        <a className="twitter-timeline" href="https://twitter.com/ChannelNewsAsia?ref_src=twsrc%5Etfw" data-tweet-limit="1">Loading Data from Twitter....<Image   src={loading}
      width={200}
      height={200}
      alt="Loading"></Image></a>
        <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
        </div>
*/
import Sidebar from '../src/components/sidebar.js'
import Navbar from '../src/components/navbar.js'
import Charts from '../src/components/chart.js'
import "../globals.css"
import CSS from 'csstype'
import coop from '/public/coop.png'
import Image from 'next/image'

export default function Home() {
  
  const bild: CSS.Properties = {
    float: "left"
  };

  return (
    <>
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
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow relative">
          <Navbar />
          <Charts/>
    </main>
    </div>
    </>
  )
}
"use client"

import { useEffect } from "react"
import { Chart } from "chart.js"
import CSS from 'csstype'
import coop from '/public/coop.png'
import Image from 'next/image'
import { useRouter } from "next/navigation"

const bild: CSS.Properties = {
    float: "left"
  };

function Example() {
    const router = useRouter()
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    borderWidth: 2
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    borderWidth: 2
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    borderWidth: 2
                }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }],
                }
            },
        });
    }, [])

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

  </div>
  <h1><b>Wahlergebnisse</b></h1>
            <div className="w-[1100px] flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;
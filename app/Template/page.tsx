'use client'
 
import { useRouter } from 'next/navigation'
import CSS from 'csstype'
import './component.css'
 
export default function Page() {
  const router = useRouter()
 
  const input: CSS.Properties = {
    backgroundColor: 'rgb(79, 83, 103)',
    float: "left",
    width: "15%",
    margin: "5px",
    borderBlock: "5px solid green",
    borderColor: "blue",
    marginTop: "5px",
    marginBottom: "7px",
    textAlign: "center"
  };

  const text: CSS.Properties = {
    backgroundColor: 'rgb(79, 83, 103)',
   fontSize: "25px",
   color: "white"
  };

  const header1: CSS.Properties = {
    backgroundColor: '#102C4E60',
    width: "15%",
    textAlign: "center",
    fontSize: "35px",
    color: "white",
    marginTop: "5px",
    borderBlock: "5px solid green",
    borderColor: "lightblue"
  };
 
  return (
        <div>

            <h1 style={header1}><b>Overview </b></h1>

            <div style={input}>
                <p  style={text}>
                     <button style={text} type="button" onClick={() => router.push('/Dashboard')}>Dashboard</button>
                </p>
            </div>

            <div style={input}>
                <p  style={text}>
                     <button style={text} type="button" onClick={() => router.push('/ClickGame')} >ClickGame</button>
                </p>
            </div>

              <div style={input}>
                <p  style={text}>
                     <button style={text} type="button" onClick={() => router.push('/Gallery')}>Gallery</button>
                </p>
            </div>        
        </div>
  )
}
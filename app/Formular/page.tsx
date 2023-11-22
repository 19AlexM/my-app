'use client'
 
import React, { useState } from "react"
import CSS from 'csstype'
import { useRouter } from 'next/navigation'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Contact() {


  //throw new Error("Error")

    const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const input: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    right: 0,
    bottom: '2rem',
    padding: '0.2rem',
    margin: `10px`,
    fontFamily: 'sans-serif',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
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

  const buttonstylecancel: CSS.Properties = {
    backgroundColor: 'rgba(234, 74, 23, 1)',
    right: 0,
    bottom: '2rem',
    padding: '3px 10px',
    margin: `0 40px`,
    fontFamily: 'sans-serif',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        name: "", 
        email: "", 
        message: "" 
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
   
   <div>
    
      <h1><b>Contact form</b></h1>
      <br />
      {formSuccess ? 
        <div>{formSuccessMessage}</div> 
        : 
        <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319" onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input  title="name" placeholder="Vor- und Zuname" type="text" name="name" onChange={handleInput} value={formData.name} style={input} />
          </div>

          <div>
            <label>Email</label>
            <input title="email" placeholder="mustermann@example.com" type="text" name="email" onChange={handleInput} value={formData.email}  style={input} />
          </div>
          
          <div>
            <label>Message</label>
            <textarea title="message" placeholder="Platz für Ihre Nachricht..." name="message" onChange={handleInput} value={formData.message}  style={input}></textarea>
          </div>
        <br />

        <Popup trigger={<button type="button" style={buttonstylecancel}><b>Cancel</b></button>}  
                position="right center"> 
                <div>Daten im Kontaktformular gehen verloren! Abbrechen?</div> 
                <button type="submit" style={buttonstylecancel} onClick={() => router.push('/Dashboard')}><b>Ja</b></button>
        </Popup> 

          <button type="submit" style={buttonstyle}><b>Send message</b></button>
        </form>
      }
    </div>
  )
}
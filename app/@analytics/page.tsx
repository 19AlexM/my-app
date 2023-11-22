'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  
  const router = useRouter()
 
  return (
    <div>
       <h1><b>ANALYTICS AT</b></h1>
    <button  className="button-24"type="button" onClick={() => router.push('/Dashboard')}>
      Dashboard
    </button>
    
    <button  className="button-24" type="button" onClick={() => router.push('/Link')}>
    Link
    </button>

    <button  className="button-24" type="button" onClick={() => router.push('/')}>
    Startseite
    </button>
    </div>
  )
}
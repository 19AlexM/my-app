import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
 
if(token != undefined){
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}else{
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=9999` },
      })
}

}

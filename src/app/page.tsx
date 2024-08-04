import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'


export default function Page() {
  const encryptedSessionData = cookies().get('session')?.value
  if (!encryptedSessionData) {
    notFound()
  }
  return (
    <div>
      <h1>Session Data</h1>
      <p>{encryptedSessionData}</p>
    </div>
  )
}
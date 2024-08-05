import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import SocketPage from '@/components/socket-page'


export default function MainPage() {
  const encryptedSessionData = cookies().get('session')?.value
  if (!encryptedSessionData) {
    notFound()
  }
  return <SocketPage keyValue={encryptedSessionData} />
}
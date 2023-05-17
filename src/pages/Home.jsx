import { useContext } from 'react'
import { FileInput } from '../components/FileInput'
import { FilesList } from '../components/FilesList'
import { AuthContext } from '../context/AuthContext'

export function Home() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <FileInput />
      {/* <div className='border sm:border-l-2 h-5/6 '></div> */}
      {user && <FilesList />}
    </>
  )
}

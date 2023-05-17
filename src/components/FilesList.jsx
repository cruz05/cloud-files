import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { FilesContext } from '../context/FilesContext'

export function FilesList() {
  const { files } = useContext(FilesContext)
  const { logout, user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await logout()
      navigate('/login')
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='grow flex flex-col gap-y-4'>
      {files.length > 0 ? (
        files.map((file, i) => (
          <div key={i} className='py-4 px-8 bg-gray-700 rounded-sm text-left'>
            <img src='' alt='' />
            <p>{file.name}</p>
            <span>{file.size} bytes</span>
          </div>
        ))
      ) : (
        <p>No files selected.</p>
      )}

      <button onClick={handleClick}>Sign out</button>
    </div>
  )
}

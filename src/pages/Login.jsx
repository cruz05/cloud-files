import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import logo from '/logo_light.svg'

export function Login() {
  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const result = await googleSignIn()
      console.log(result.user)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  // const { email, displayName, photoURL, uid } = user

  return (
    <div className='grow text-center px-10'>
      <img className='w-32 mx-auto' src={logo} alt='InBox logo.' />
      <h2 className='text-5xl font-semibold my-5'>Welcome back!</h2>
      <p>
        You can login to your Google account to upload your files easily to
        drive.
      </p>
      <button
        onClick={handleClick}
        className='border py-3 px-8 rounded-md mt-3 hover:'
        type='button'>
        Continue with Google
      </button>
    </div>
  )
}

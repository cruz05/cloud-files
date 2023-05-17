import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div>
      <h1 className='text-9xl font-semibold'>404</h1>
      <p className='text-5xl mb-3'>Page not found.</p>
      <Link to='/' className='text-cyan-500 text-3xl underline'>
        Go Home
      </Link>
    </div>
  )
}

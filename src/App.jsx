import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'
import { FilesContextProvider } from './context/FilesContext'

export default function App() {
  return (
    <main className='text-center min-h-screen flex flex-wrap-reverse gap-x-16 p-4 items-center justify-center'>
      <FilesContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthContextProvider>
      </FilesContextProvider>
    </main>
  )
}

import { useContext } from 'react'
import { FilesContext } from '../context/FilesContext'

export function FileInput() {
  const { updateFiles } = useContext(FilesContext)

  const handleChange = e => {
    console.log(...e.target.files)
    const addedFiles = e.target.files
    updateFiles(addedFiles)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitting')
  }

  return (
    <div className='grow px-10'>
      <form id='fileuploader' onSubmit={handleSubmit}>
        <label>
          <input
            type='file'
            name='files'
            id='files'
            multiple
            placeholder='Drop your files here.'
            onChange={handleChange}
          />
        </label>
      </form>
      <button
        type='submit'
        form='fileuploader'
        className='border border-cyan-900 px-10 py-3 rounded-md bg-cyan-600 hover:bg-cyan-800'>
        Upload Files
      </button>
    </div>
  )
}

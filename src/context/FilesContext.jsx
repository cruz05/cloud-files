import { createContext, useState } from 'react'

export const FilesContext = createContext()

export function FilesContextProvider({ children }) {
  const [files, setFiles] = useState([])

  const updateFiles = newFiles => {
    setFiles(prevFiles => [...prevFiles, ...newFiles])
  }

  return (
    <FilesContext.Provider value={{ files, updateFiles }}>
      {children}
    </FilesContext.Provider>
  )
}

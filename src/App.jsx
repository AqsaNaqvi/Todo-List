
import { useEffect, useState } from 'react'
import './App.css'
import { TheameProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
 const [themeMode , setThemeMode] = useState("light")

 const lightTheme = () => {

  setThemeMode("Light")
 }

 const darkTheme = () => {

  setThemeMode("dark")
 }

 // actual change in theme
 useEffect(()=> {
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 }, [themeMode])

  return (
    <TheameProvider  value={{themeMode, darkTheme, lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>

    <div className='w-full'>
        <div className='w-full max-w-sm ms-auto flex justify-end mb-4'>
         < ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
         < Card />
      </div>

    </div>
      </div>
    </TheameProvider>
  )
}

export default App

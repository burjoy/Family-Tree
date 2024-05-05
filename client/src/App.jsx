import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvider } from '../context/context'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routes/route'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <RouterProvider router={router}/>
    </GlobalProvider>
  )
}

export default App

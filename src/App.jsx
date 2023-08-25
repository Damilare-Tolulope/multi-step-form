import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='bg-coolgray h-screen overflow-y-auto lg:flex items-center justify-center'>
      <Home />
    </div>
  )
}

export default App;

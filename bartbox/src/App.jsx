import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card  title="avatarr" />
      <Card  title="star wars" />
    </div>
  )
} 

export default App

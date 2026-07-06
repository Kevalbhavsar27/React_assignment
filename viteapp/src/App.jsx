import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserGreetingClass from './UserGreetingClass'
import UserGreeting from './UserGreeting'
import MiniProfile from './MiniProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h1>Welcome to React JSX!</h1>

      <UserGreeting username="Keval Bhavsar" />

      <UserGreetingClass username="Keval Bhavsar" />

      <MiniProfile />
    </div>
    </>
  )
}

export default App

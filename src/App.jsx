import { useState } from 'react'
import Design from './assets/components/Design'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Design />
    </>
  )
}

export default App

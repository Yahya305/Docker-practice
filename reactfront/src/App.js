import './App.css';
import { useState } from 'react'

function App() {
  const [text, setText] = useState()
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "localhost:8000";
  console.log(backendUrl)

  const handleClick=async()=>{
    try {
      const res = await fetch(`http://${backendUrl}:8000/get-hello`);
      const data = await res.json()
      setText(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
      </div>
      <h1>Vite + React {text && <>{text}</>}</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {text}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

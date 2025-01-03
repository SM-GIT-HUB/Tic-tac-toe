// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from "react"
import Grid from "./Components/Grid"

function App() {

  async function apiCall()
  {
    try {
      const res = await fetch("https://lets-chat-fjae.onrender.com/api/check");
      const data = await res.json();
      console.log(data);
    }
    catch {
      console.log("nothing");
    }
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <div className="flex items-center justify-center h-[100vh] bg-[#393939]">
      <Grid/>
    </div>
  )
}

export default App

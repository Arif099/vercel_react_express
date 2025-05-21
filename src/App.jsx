import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("https://vercel-express-api-pink.vercel.app/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching the message:", error))
  }, [])

  return (
    <>
      <p className="read-the-docs">
        {message ? message : "Loading message..."}
      </p>
    </>
  )
}

export default App
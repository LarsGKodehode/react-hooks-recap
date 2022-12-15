import { useState, useEffect } from "react"

const URL = "https://pokeapi.co/api/v2/pokemon/1"

function handleClick(currentUrl, callback) {
  let newUrl = "https://pokeapi.co/api/v2/pokemon/2"
  // Some logic here for change the URL to the correct one

  callback(newUrl)
}

function FetchingComponent() {
  const [ currentUrl, setCurrentUrl ] = useState(URL)
  const [ state, setState ] = useState(null)

  useEffect(
    () => {
      async function getData() {
        const response = await fetch(currentUrl)
        const data = await response.json()

        setState(data)
      }

      getData()
    },
    [currentUrl]
  )

  return (
    <div>
      <button onClick={() => handleClick(currentUrl, setCurrentUrl)}>Next Pokemon</button>
      <h1>{state && state.name}</h1>
    </div>
  )
}

export default FetchingComponent
import { useState } from "react"

function StatefullComponent(props) {
  const { children } = props

  const [ state, setState ] = useState(false)

  return (
    <div>
      <h1 onClick={() => setState((oldState) => !oldState)}>Statefull Component</h1>

      {
        state &&
        <ul>
          {children.map(
            (child, index) => <li key={index}>{child}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default StatefullComponent
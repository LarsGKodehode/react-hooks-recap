function StaticComponent(props) {
  const { children } = props

  return (
    <ul>
      {children.map(
        (child, index) => <li key={index}>{child}</li>
      )}
    </ul>
  )
}

export default StaticComponent
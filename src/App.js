import "./App.css"

function App() {
  const greeting = "greeting"
  return (
    <div className="container">
      <h1 id={greeting}>Hello World!</h1>
      <p>This is JSX</p>
      <ul>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="grinning face" id="grinning face">
              😀
            </span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="party popper" id="party popper">
              🎉
            </span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="woman dancing" id="woman dancing">
              💃
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App

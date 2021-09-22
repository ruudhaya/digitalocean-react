import "./App.css"

const displayEmojiName = (event) => alert(event.target.id)

const emojis = [
  {
    name: "grinning face",
    value: "😀",
  },
  {
    name: "party popper",
    value: "🎉",
  },
  {
    name: "woman dancing",
    value: "💃",
  },
]

function App() {
  const greeting = "greeting"
  return (
    <div className="container">
      <h1 id={greeting}>Hello World!</h1>
      <p>This is JSX</p>
      <ul>
        {emojis.map((emoji) => (
          <li>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.value}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

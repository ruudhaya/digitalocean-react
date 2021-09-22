import "./App.css"
import Animals from "./data"
import AnimalCard from "../AnimalCard/AnimalCard"

function App() {
  return (
    <div className="wrapper">
      <h1> Animals </h1>
      {Animals.map((animal) => (
        <AnimalCard key={animal.name} name={animal.name} />
      ))}
    </div>
  )
}

export default App

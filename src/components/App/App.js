import "./App.css"
import animals from "./data"
import AnimalCard from "../AnimalCard/AnimalCard"

function showAdditional(additional) {
  if (additional) {
    const alertInformation = Object.entries(additional)
      .map((information) => `${information[0]}: ${information[1]}`)
      .join("\n")
    alert(alertInformation)
  }
}

function App() {
  return (
    <div className="wrapper">
      <h1> Animals </h1>
      {animals.map((animal) => (
        <AnimalCard diet={animal.diet} name={animal.name} size={animal.size} />
      ))}
    </div>
  )
}

export default App

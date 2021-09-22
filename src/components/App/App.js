import "./App.css"
import Animals from "./data"
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
      {Animals.map((animal) => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  )
}

export default App

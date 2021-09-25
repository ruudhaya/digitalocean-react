import React from "react"
import PropTypes from "prop-types"
import "./AnimalDetails.css"

function convertDiet(food) {
  switch (food) {
    case "insects":
      return "🐜"
    case "meat":
      return "🍖"
    case "plant":
    default:
      return "🌱"
  }
}

export const AnimalDetails = ({ diet, scientificName }) => {
  return (
    <div className="detail">
      <h4>AnimalDetails</h4>
      <div>Scientific Name: {scientificName}</div>
      <div>
        Diet:
        {diet
          .map((aDiet) => {
            return convertDiet(aDiet)
          })
          .join(" ")}
      </div>
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
}

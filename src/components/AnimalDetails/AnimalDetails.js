import React from "react"
import PropTypes from "prop-types"

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

export const AnimalDetails = ({ diet }) => {
  return (
    <div className="detail">
      <h1>AnimalDetails</h1>
      Diet:
      {diet
        .map((aDiet) => {
          return convertDiet(aDiet)
        })
        .join(" ")}
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
}

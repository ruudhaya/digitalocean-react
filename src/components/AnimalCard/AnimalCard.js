import React from "react"
import PropTypes from "prop-types"
import "./AnimalCard.css"
import { AnimalDetails } from "../AnimalDetails/AnimalDetails"

export default function AnimalCard({ diet, name, size }) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h4>{size}kg</h4>
      <AnimalDetails diet={diet} />
    </div>
  )
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

import React from "react"
import PropTypes from "prop-types"
import "./AnimalCard.css"
import { AnimalDetails } from "../AnimalDetails/AnimalDetails"
import Card from "../Card/Card"

export default function AnimalCard({ name, size, ...props }) {
  return (
    <Card title="Animal">
      <div>
        <h3>{name}</h3>
        <h4>{size}kg</h4>
        <AnimalDetails {...props} />
      </div>
    </Card>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

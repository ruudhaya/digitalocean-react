import React from "react"
import PropTypes from "prop-types"
import "./Card.css"

const Card = ({ children, title }) => {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Card

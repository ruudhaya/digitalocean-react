import React from "react"
import emoji from "./emoji.svg"
import "./Instructions.css"

export default function Instructions() {
  return (
    <div className="instructions">
      <img src={emoji} alt="laughing crying emoji" />
      <p>Click on the emoji to see their name</p>
    </div>
  )
}

import React, { Component } from "react"
import emoji from "./emoji.svg"

export default class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <img src={emoji} alt="laughing crying emoji" />
        <p>Click on the emoji to see their name</p>
      </div>
    )
  }
}

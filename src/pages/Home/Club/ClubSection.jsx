import React, { Component } from "react"
import clubData from "./Data"
import Club from "./Club"

export default class ClubSection extends Component {
  render() {
    return (
      <>
        {clubData.map((x, index) => (
          <Club key={index} data={x} />
        ))}
      </>
    )
  }
}

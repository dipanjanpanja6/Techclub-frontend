import React, { Component } from "react"
import Banner from "./Banner"

export default class index extends Component {
  componentDidMount() {
    document.title = "Tech Club - GCECT"
  }

  render() {
    return (
      <>
        <Banner />
        {/* Tech Club */}
        {/* Project */}
        {/* About */}
      </>
    )
  }
}

import React, { Component } from "react"
import { Link } from "react-router-dom"

class ButtonX extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
    this.updateHover = this.updateHover.bind(this)
  }

  updateHover = () => {
    this.setState({
      hover: !this.state.hover,
    })
  }

  render() {
    const { size, rounded, color1, color2, value } = this.props

    const btnSize = size === "l" ? "btn-lg" : size === "s" ? "btn-sm" : ""
    const btnRound = rounded ? "rounded-pill" : "rounded"

    const style1 = {
      color: color1,
      backgroundColor: color2,
      border: "1px solid " + color1,
      padding: "10px 30px",
    }

    const style2 = {
      color: color2,
      backgroundColor: color1,
      border: "1px solid " + color1,
      padding: "10px 30px",
    }

    return (
      <Link to={this.props.to} onMouseEnter={this.updateHover} onMouseLeave={this.updateHover}>
        <button style={this.state.hover ? style2 : style1} className={`btn ${btnSize} ${btnRound}`}>
          {" "}
          {value}{" "}
        </button>
      </Link>
    )
  }
}

ButtonX.defaultProps = {
  color1: "#f7fff7",
  color2: "#343434",
  size: "m",
  rounded: true,
  to: "/",
  value: "Action",
}

export default ButtonX

import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Banner extends Component {
  render(props) {
    return (
      <div className="wrapper">
        <div className="bg-image">
          <div className="title-content">
            <div className="container py-5">
              <div className="row">
                <div className="col-md-6 col-12">
                  <span id="home-sub-title">Welcome to</span>
                  <span id="home-title">GCECT Tech Club</span>
                  <div className="mt-4">
                    {this.props.auth ? (
                      <Button component={Link} to="/home" variant="outlined" color="primary">
                        Submit Project
                      </Button>
                    ) : (
                      <Button component={Link} to="/auth" variant="outlined" color="primary">
                        Register
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

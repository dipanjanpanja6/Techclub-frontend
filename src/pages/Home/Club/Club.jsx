import React, { Component } from 'react'
import './Club.css'

export default class Club extends Component {

    render(props) {

        console.log(this.props.data)

        const bgImage = {
            backgroundImage: `linear-gradient( 273deg , rgba(255,255,255,0) 33%, rgba(52,52,52,1) 100%),url(${this.props.data.image})`
        }

        const reverse = {
            flexDirection: (this.props.data.direction)?"row-reverse":"",
            backgroundColor: this.props.data.bg
        }

        return (
            <div className="wrapper-section" style={reverse}>
                <div className="wrapper-inner bg-danger p-3 club-image" style={bgImage}>
                    <div className="club-title">
                        <span className="club-name">{this.props.data.name}</span>
                        <span className="club-motto">{this.props.data.motto}</span>
                    </div>
                </div>
                <div className="wrapper-inner p-3">
                    <div className="wrapper-content p-4 m-4">
                        <p style={{color:this.props.data.color}}>{this.props.data.about}</p>
                        {this.props.data.topic.map((x,index) => <span key={index} class=" mx-1 badge bg-light text-dark">{x}</span> )}
                    </div>
                </div>
            </div>

        )
    }
}
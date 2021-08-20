import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="wrapper">
            <div className="bg-image">
                <div className="title-content">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <span id="home-sub-title">Welcome to</span>
                                <span id="home-title">GCECT Tech Club</span>
                                <Link to="/auth" style={{border: "2px solid #fff"}} className="btn btn-outline-light btn-lg mt-4 px-4 rounded-pill">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

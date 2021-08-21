import React, { Component } from 'react';
import ButtonX from '../../common/ButtonX';
import './style.css';

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
                                    { !this.props.auth && <ButtonX value="Register" to="/auth" size="l" color2="#6ca6c1"/> }
                                    { this.props.auth && <ButtonX value="Submit Project" to="/home" size="l" color2="#6ca6c1"/> }
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

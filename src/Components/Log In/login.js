import React, { Component } from 'react'
import axios from 'axios'
import './login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "Logan91",
            password: "password"
        }
    }

    register() {
        axios.post('http://localhost:3000/api/auth/login', this.state)
        .then(res => console.log(res))
    }

    render() {
        return (
            <div className="register-main-container">
                <div className="register-inner-container">
                    <div className="register-info-container">
                        <div className="register-title">
                            <div>Log in!</div>
                        </div>
                        <div className="register-subheader">
                            <div>• Enter your username</div>
                        </div>
                        <input className="register-input" placeholder="Username"></input>
                        <div className="register-subheader">
                            <div>• Enter your password</div>
                        </div>
                        <input className="register-input" placeholder="Password"></input>
                        <div className="register-button-container">
                            <div className="register-button" onClick={() => this.register()}>
                                <div>Log in</div>
                            </div>
                        </div>
                    </div>
                    <div className="register-picture-container">
                        <div className="register-picture">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
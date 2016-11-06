import React, { Component } from 'react'
import { Link } from 'react-router'

class Heading extends Component {
    constructor(props) {
        super(props)
    }
    logout() {
        sessionStorage.setItem('chirps', '')
        sessionStorage.setItem('id', '')
        sessionStorage.setItem('avatar', '')
        window.location.href = "/index.html"
    }
    render() {
        const path = '/w6d4-make-chirp/'

        var avatar = 'https://immense-harbor-69502.herokuapp.com' + sessionStorage.getItem('avatar')
        return <div className="container-fluid heading">
            <div className="row flex">
                <div className="col-xs-3">
                    <img className="logo" src="./img/chirp-logo.png" />
                </div>
                <div className="col-xs-9 text-right">
                    <Link to={path + 'chirps.html'}>
                        <button type="button" className="btn btn-default heading_buttons">Chirps</button>
                    </Link>
                    <Link to={path + 'users'}>
                        <button type="button" className="btn btn-default heading_buttons">Users</button>
                    </Link>
                    <img className="thumbnail avatar" src={avatar} />
                    <button type="button" className="btn btn-default heading_buttons" onClick={this.logout}>Logout</button>
                </div>
            </div>
        </div>
    }
}

export default Heading

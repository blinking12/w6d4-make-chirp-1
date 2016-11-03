import React, { Component } from 'react'

class Heading extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //
        // }
    }
    render() {
        return <div className="container">
            <div className="row flex">
                <div className="col-xs-3">
                    <img className="logo" src="./img/chirp-logo.png" />
                </div>
                <div className="col-xs-9 text-right">
                    <h4 className="followers">Followers</h4>
                    <img className="thumbnail avatar" src="http://robohash.org/today" />
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    }
}

export default Heading

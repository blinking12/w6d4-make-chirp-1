import React, { Component } from 'react'

class Heading extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //
        // }
    }
    render() {
        return <div className="container-fluid heading">
            <div className="row flex">
                <div className="col-xs-3">
                    <img className="logo" src="./img/chirp-logo.png" />
                </div>
                <div className="col-xs-9 text-right">
                    <img className="thumbnail avatar" src="http://robohash.org/today" />
                    <button type="button" className="btn btn-default">Logout</button>
                </div>
            </div>
        </div>
    }
}

export default Heading

import React, { Component } from 'react'

class ChirpUploader extends Component {
    constructor(props) {
        super(props)
        // this.upload = this.upload.bind(this)
        // this.state = {
        //
        // }
    }
    // upload() {
    //     // upload function to post chirp to the server
    // }
    render() {
        return <div className="container uploader">
            <div className="row">
                <div className="form-group col-xs-12 col-sm-8 col-sm-offset-1">
                    <input type="text" id="shout" name="shout" required maxLength="170" className="form-control" />
                </div>
                <div className="form-group col-xs-12 col-sm-2 text-center">
                    <button id="chirp" type="button" className="btn btn-default icon"><img className="logo" src="./img/chirp-icon.png"/></button>
                </div>
            </div>
        </div>
    }
}

export default ChirpUploader

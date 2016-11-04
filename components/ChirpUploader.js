import React, { Component } from 'react'

class ChirpUploader extends Component {
    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            chirps: []
        }
    }
    upload() {
        // upload function to post chirp to the server

        // 'http://7d7089fa.ngrok.io'

        var data = new FormData()
        data.append('chirp', this.state.chirp)
        this.state.chirps.push(this.state.chirp)
        document.querySelector('#shout').value = ''
        console.log(this.state.chirps)
    }
    render() {
        return <div className="container uploader">
            <div className="row">
                <div className="form-group col-xs-12 col-sm-8 col-sm-offset-1">
                    <input type="text" id="shout" name="shout" required maxLength="170" className="form-control" onChange={(e) => this.setState({chirp:e.target.value})}/>
                </div>
                <div className="form-group col-xs-12 col-sm-2 text-center">
                    <button id="chirp" type="button" className="btn btn-default icon" onClick={this.upload}><img className="logo" src="./img/chirp-icon.png" /></button>
                </div>
            </div>
        </div>
    }
}

export default ChirpUploader

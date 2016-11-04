import React, { Component } from 'react'

class ChirpUploader extends Component {
    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            chirp: ''
        }
    }
    upload() {
        // upload function to post chirp to the server
        var data = new FormData()
        data.append('chirp', this.state.chirp)

        fetch('http://7d7089fa.ngrok.io/api/shouts', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(renderView)

        // document.querySelector('#shout').value = ''
    }
    render() {
        return <div className="container uploader">
            <div className="row">
                <div className="form-group col-xs-12 col-sm-8 col-sm-offset-1">
                    <textarea type="text" id="shout" name="shout" required maxLength="170" className="form-control" onChange={(e) => this.setState({chirp:e.target.value})}></textarea>
                </div>
                <div className="form-group col-xs-12 col-sm-2 text-center">
                    <button id="chirp" type="button" className="btn btn-default icon" onClick={this.upload}><img className="logo" src="./img/chirp-icon.png" /></button>
                </div>
            </div>
        </div>
    }
}

export default ChirpUploader

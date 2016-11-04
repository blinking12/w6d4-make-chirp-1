import React, { Component } from 'react'

class ChirpUploader extends Component {
    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            chirp: '',
            triggerUpdateChirp: props.triggerUpdateChirp
        }
    }
    upload() {
        // upload function to post chirp to the server
        var data = new FormData()
        data.append('api_token', sessionStorage.getItem('chirps'))
        data.append('body', this.state.chirp)

        fetch('https://immense-harbor-69502.herokuapp.com/api/shouts', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(this.state.triggerUpdateChirp)
        document.querySelector('#shout').value = ''
    }
    render() {
        return <div className="container uploader">
            <div className="row">
                <div className="form-group col-xs-12 col-sm-8 col-sm-offset-1">
                    <textarea type="text" id="shout" name="shout" required maxLength="165" className="form-control" onChange={(e) => this.setState({chirp:e.target.value})}></textarea>
                </div>
                <div className="form-group col-xs-12 col-sm-2 text-center">
                    <button id="chirp" type="button" className="btn btn-default icon" onClick={this.upload}><img className="logo" src="./img/chirp-icon.png" /></button>
                </div>
            </div>
        </div>
    }
}

export default ChirpUploader

import React, { Component } from 'react'

import ChirpUploader from '../components/ChirpUploader'
import ChirpDisplayer from '../components/ChirpDisplayer'
import Heading from '../components/Heading'

class Chirps extends Component {
    constructor(props) {
        super(props)
        this.triggerUpdateChirp = this.triggerUpdateChirp.bind(this)
        this.state = {
            updateChirps: Date.now()
        }
    }
    componentDidMount() {
        this.triggerUpdateChirp()
    }
    triggerUpdateChirp() {
        this.setState({
            updateChirps: Date.now()
        })
    }

    render() {
        return <div>
            <Heading />
            <ChirpUploader triggerUpdateChirp={this.triggerUpdateChirp} />
            <ChirpDisplayer updateChirps={this.state.updateChirps} />
        </div>
    }
}

export default Chirps

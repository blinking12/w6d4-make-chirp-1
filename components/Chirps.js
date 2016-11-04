import React, { Component } from 'react'

import ChirpUploader from '../components/ChirpUploader'
import ChirpDisplayer from '../components/ChirpDisplayer'
import Heading from '../components/Heading'

class Chirps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Heading />
            <ChirpUploader />
            <ChirpDisplayer />
        </div>
    }
}

export default Chirps

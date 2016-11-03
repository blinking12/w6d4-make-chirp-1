import React from 'react'
import ReactDOM from 'react-dom'

import ChirpUploader from '../components/ChirpUploader'
import ChirpDisplayer from '../components/ChirpDisplayer'
import Heading from '../components/Heading'

window.renderView = function() {
    ReactDOM.render(
        <div>
            <Heading />
            <ChirpUploader />
            <ChirpDisplayer />
        </div>,
        document.querySelector('#app')
    )
}

renderView()

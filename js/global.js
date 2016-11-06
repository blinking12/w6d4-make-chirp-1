import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Heading from '../components/Heading'
import Chirps from '../components/Chirps'
import UserDisplayer from '../components/UserDisplayer'


var renderView = function() {
    ReactDOM.render(
        // <Chirps />
        <Router history={browserHistory}>
            <Route path="w6d4-make-chirp/chirps.html" component={Chirps} />
            <Route path="/users" component={UserDisplayer} />
        </Router>
        , document.querySelector('#app')
    )
}

renderView()

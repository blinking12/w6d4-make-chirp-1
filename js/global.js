import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Heading from '../components/Heading'
import Chirps from '../components/Chirps'
import UserDisplayer from '../components/UserDisplayer'



var renderView = function() {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/chirps.html" component={Chirps} />
            <Route path="/users" component={UserDisplayer} />
        </Router>,
        document.querySelector('#app')
    )
}

renderView()

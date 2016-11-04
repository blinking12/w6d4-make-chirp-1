import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Chirps from '../components/Chirps'
import UserDisplayer from '../components/UserDisplayer'

window.renderView = function() {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/chirps.html" component={Chirps} />
            <Route path="/users.html" component={UserDisplayer} />
        </Router>,
        document.querySelector('#app')
    )
}

renderView()

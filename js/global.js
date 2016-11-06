import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Heading from '../components/Heading'
import Chirps from '../components/Chirps'
import UserDisplayer from '../components/UserDisplayer'

const path = window.location.href.includes('github') ? '/w6d4-make-chirp/' : '/'

var renderView = function() {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path={path + 'chirps.html'} component={Chirps} />
            <Route path={path + 'users'} component={UserDisplayer} />
        </Router>
        , document.querySelector('#app')
    )
}

renderView()

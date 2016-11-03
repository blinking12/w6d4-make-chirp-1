import React, { Component } from 'react'

class ChirpDisplayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: ['a']
        }
    }
    componentDidMount() {
        // function to call fetch to get the posted chirps
    }
    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div key={i}>
                <h3>Placeholder for each chrip. Will need to get avatar photo of user who posted, the chirp text, and add a follow/unfollow button.</h3>
            </div>
        })
        return <div>
            {chirps}
        </div>
    }
}

export default ChirpDisplayer

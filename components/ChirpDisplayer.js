import React, { Component } from 'react'

class ChirpDisplayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: ['a', 'b'],
            followers: ['a', 'b']
        }
    }
    componentDidMount() {
        // function to call fetch to get the posted chirps
    }
    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div className="row panel panel-default" key={i}>
                        <div className="panel-body">
                            <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3">
                                <img className="avatar thumbnail" src="./img/chirp-logo.png"/>
                            </div>
                            <div className="col-sm-9">
                                <p>Placeholder for each chirp. Will need to get avatar photo of user who posted, the chirp text, and add a follow/unfollow button.</p>
                            </div>
                            <div className="col-xs-6 col-xs-offset-3 col-sm-3 col-sm-offset-9">
                                <button type="button" className="btn btn-block btn-default follow">Follow</button>
                            </div>
                        </div>
                    </div>
                })

        return <div className="container">
            <div className="row">
                <div className="col-sm-8">
                {chirps}
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                    <div className="row panel panel-default">
                        <div className="panel-body text-center">
                            <h4>{this.state.followers.length} Followers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ChirpDisplayer

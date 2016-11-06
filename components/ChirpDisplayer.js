import React, { Component } from 'react'

class ChirpDisplayer extends Component {
    constructor(props) {
        super(props)
        this.updateChirps = this.updateChirps.bind(this)
        this.state = {
            chirps: [],
            updateChirps: props.updateChirps
        }
    }
    componentDidMount() {
        // function to call fetch to get the posted chirps
        this.updateChirps()
    }

    updateChirps() {
        fetch('https://immense-harbor-69502.herokuapp.com/api/shouts?api_token=' + sessionStorage.getItem('chirps'), {
            method: 'GET',
        })
        .then(response => response.json())
        .then((response) => {
            this.setState({
                chirps: response.shouts,
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.updateChirps !== nextProps.updateChirps) {
            this.setState({
                updateChirps: nextProps.updateChirps
            })
            this.updateChirps()
        }
    }

    unfollow(userid) {
        fetch('https://immense-harbor-69502.herokuapp.com/api/unfollow', {
            body: JSON.stringify({
              id: userid,
              api_token: sessionStorage.getItem('chirps'),
            }),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())

        this.updateChirps()
    }

    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div className="row panel panel-default" key={i}>
                        <div className="panel-body">
                            <div className="col-sm-3 col-sm-offset-0 col-xs-4 text-center">
                                <img className="avatar thumbnail" src={'https://immense-harbor-69502.herokuapp.com' + chirp.user.avatar}/>
                            </div>
                            <div className="col-sm-9 col-xs-8">
                                <div>
                                    <p>{chirp.user.name}</p>
                                </div>
                                <p className="chirp_body">{chirp.body}</p>
                            </div>
                        </div>
                    </div>
                })

        var followersArray = []
        var followersId = []
        var followers = this.state.chirps.map((chirp, i) => {
            if (followersId.indexOf(chirp.user.id) === -1) {
                followersId.push(chirp.user.id)
                followersArray.push(chirp.user)
            }
        })

        var displayFollowers = followersArray.map((follower, i) => {
            if (follower.avatar === null) {
                follower.avatar = 'http://robohash.org/' + i
            } else {
                follower.avatar = ('https://immense-harbor-69502.herokuapp.com' + follower.avatar)
            }
        })
        var displayFollowers = followersArray.map((follower, i) => {
            return <div className="col-xs-5 follower_panel" key={i}>
                    <div className="">
                        <img className="avatar thumbnail" src={follower.avatar}/>
                        <div className="follower_text flex text-center">
                            {follower.name}
                        </div>
                        <div>
                            <button type="button" id="unfollowButton" className="btn btn-default unfollow" onClick={() => this.unfollow(follower.id)}>Unfollow</button>
                        </div>
                    </div>
            </div>
        })

        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-1">
                    {chirps}
                </div>
                <div className="col-sm-4 col-sm-offset-1 text-center">
                <h3 id="following_title">Following</h3>
                    {displayFollowers}
                </div>
            </div>
        </div>
    }
}

export default ChirpDisplayer

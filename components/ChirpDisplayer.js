import React, { Component } from 'react'

class ChirpDisplayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: [],
            following: ['a', 'b']
        }
    }
    componentDidMount() {
        // function to call fetch to get the posted chirps
        fetch('http://7d7089fa.ngrok.io/api/shouts', {
            method: 'POST',
            body: JSON.stringify({
                api_token: sessionStorage.getItem('chirps')
            })
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            this.setState({
                chirps: response.shouts,
            })
        })
    }

    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div className="row panel panel-default" key={i}>
                        <div className="panel-body">
                            <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3 text-center">
                                <img className="avatar thumbnail" src={chirp.user.avatar}/>
                                <span>{chirp.user.name}</span>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                                <p>{chirp.body}</p>
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
                            <h4>Following {this.state.following.length} users</h4>
                            <button type="button" className="btn btn-default">See all users</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ChirpDisplayer

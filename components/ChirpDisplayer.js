import React, { Component } from 'react'

class ChirpDisplayer extends Component {
    constructor(props) {
        super(props)
        this.updateChirps = this.updateChirps.bind(this)
        this.state = {
            chirps: [],
            updateChirps: props.updateChirps,
            following: ''
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
        fetch('https://immense-harbor-69502.herokuapp.com/api/allfollowers?api_token=' + sessionStorage.getItem('chirps') + '&id=' + sessionStorage.getItem('id'), {
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => {
            this.setState({
                following: response.users.length
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

    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div className="row panel panel-default" key={i}>
                        <div className="panel-body">
                            <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3 text-center">
                                <img className="avatar thumbnail" src={'https://immense-harbor-69502.herokuapp.com' + chirp.user.avatar}/>
                                <span>{chirp.user.name}</span>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                                <p className="chirp_body">{chirp.body}</p>
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
                            <h4>Following {this.state.following} users</h4>
                            <button type="button" className="btn btn-default">See all users</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ChirpDisplayer

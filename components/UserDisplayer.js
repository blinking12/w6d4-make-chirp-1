import React, { Component } from 'react'

import Heading from '../components/Heading'

class UserDisplayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
            {
                avatar: 'http://robohash.org/friday',
                username: 'User 1'
            },
            {
                avatar: 'http://robohash.org/friday',
                username: 'User 2'
            },
            {
                avatar: 'http://robohash.org/friday',
                username: 'User 3'
            }
            ]
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
                users: response.shouts,
            })
        })
    }

    render() {
        var users = this.state.users.map((user, i) => {
            return <div className="col-sm-4 col-xs-6 panel panel-default" key={i}>
                            <div className="panel-body">
                                <div className="text-center">
                                    <div className="col-xs-12">
                                        <img className="avatar thumbnail" src={user.user.avatar}/>
                                    </div>
                                    <div className="col-xs-12">
                                        <p>{user.user.username}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-block btn-default follow">Follow</button>
                                </div>
                    </div>
                </div>
                })

        return <div className="container">
            <div className="row">
                <Heading />
                <div className="col-sm-12">
                {users}
            </div>
        </div>
        </div>
    }
}

export default UserDisplayer

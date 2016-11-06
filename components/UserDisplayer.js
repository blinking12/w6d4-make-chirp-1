import React, { Component } from 'react'

import Heading from '../components/Heading'

class UserDisplayer extends Component {
    constructor(props) {
        super(props)
        this.follow = this.follow.bind(this)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        // function to call fetch to get the posted chirps
        fetch('https://immense-harbor-69502.herokuapp.com/api/all?api_token=' + sessionStorage.getItem('chirps') + '&id=' + sessionStorage.getItem('id'), {
            method: 'GET',
        })
        .then(response => response.json())
        .then((response) => {
            this.setState({
                users: response.users
            })
        })
    }
    follow(userid) {
            fetch('https://immense-harbor-69502.herokuapp.com/api/follow', {
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
        }

    render() {
        var users = this.state.users.map((user, i) => {
            if (user.avatar === null) {
                user.avatar = 'http://robohash.org/' + i
            } else {
                user.avatar = ('https://immense-harbor-69502.herokuapp.com' + user.avatar)
            }
        })
        var users = this.state.users.map((user, i) => {
            return <div className="col-sm-3 col-xs-6 users" key={i}>
                        <div className="panel-body panel_outline">
                            <div className="text-center">
                                <div className="col-xs-12 text-center">
                                    <img className="avatar thumbnail" src={user.avatar}/>
                                </div>
                                <div className="col-xs-12 user_name">
                                    <p className="user_name">{user.name}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                                <button type="button" id="followButton" className="btn btn-block btn-default follow" onClick={() => this.follow(user.id)}>Follow</button>
                            </div>
                        </div>
                    </div>
            })

        return <div className="container-fluid">
            <div className="row">
                <Heading />
                <div className="row">
                    {users}
            </div>
        </div>
        </div>
    }
}

export default UserDisplayer

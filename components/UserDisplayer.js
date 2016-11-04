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
        fetch('http://7d7089fa.ngrok.io/api/all?api_token=' + sessionStorage.getItem('chirps'), {
            method: 'GET',
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            this.setState({
                users: response.users,
            })
        })
        // fetch('http://7d7089fa.ngrok.io/api/allfollowers', {
        //     method: 'GET',
        // })
        // fetch('http://7d7089fa.ngrok.io/api/follow', {
        //     method: 'GET',
        // })

    }
    follow(userid) {
        console.log(userid)
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
        // .then(response => console.log(response))

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
            return <div className="col-sm-3 col-xs-5 panel panel-default users" key={i}>
                            <div className="panel-body">
                                <div className="text-center">
                                    <div className="col-xs-12">
                                        <img className="avatar thumbnail" src={user.avatar}/>
                                    </div>
                                    <div className="col-xs-12">
                                        <p>{user.name}</p>
                                        <p>{user.id}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-block btn-default follow" onClick={() => this.follow(user.id)}>Follow</button>
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
